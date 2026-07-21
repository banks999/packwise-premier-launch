import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { env } from "cloudflare:workers";

import { contactSchema } from "./contact-schema";

export interface ContactSubmitInput {
  fullName: string;
  email: string;
  company: string;
  sector: string;
  brief: string;
  turnstileToken: string;
  botcheck: string;
}

export type ContactSubmitResult =
  | { ok: true }
  | { ok: false; reason: "bot" }
  | { ok: false; reason: "rate_limit" }
  | { ok: false; reason: "validation"; fieldErrors: Record<string, string> }
  | { ok: false; reason: "turnstile" }
  | { ok: false; reason: "upstream" };

// In-memory per-IP rate limit. A Cloudflare Worker can run many concurrent
// isolates and evict idle ones at any time, so this Map is neither durable
// nor shared across all of them — it only throttles abuse within whichever
// warm isolate handles a given request. That's a reasonable basic backstop
// for a low-traffic contact form; for a real guarantee, use Durable Objects
// or Cloudflare's rate limiting API/WAF rules instead.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (requestLog.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  requestLog.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX;
}

async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const secret = env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.error("TURNSTILE_SECRET_KEY is not configured");
    return false;
  }
  if (!token) return false;

  const body = new URLSearchParams({ secret, response: token, remoteip: ip });
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!res.ok) return false;
  const result = (await res.json()) as { success: boolean };
  return result.success === true;
}

export const submitContactForm = createServerFn({ method: "POST" })
  .inputValidator((data: ContactSubmitInput) => data)
  .handler(async ({ data }): Promise<ContactSubmitResult> => {
    // Honeypot: a real visitor never fills this hidden field. This is a
    // second, cheap layer behind Turnstile — checked again here because the
    // client-side check can be bypassed by anyone calling this endpoint
    // directly.
    if (data.botcheck) return { ok: false, reason: "bot" };

    const ip =
      getRequest().headers.get("cf-connecting-ip") ??
      getRequest().headers.get("x-forwarded-for") ??
      "unknown";

    if (isRateLimited(ip)) return { ok: false, reason: "rate_limit" };

    // Never trust the client-side pass — re-validate with the same schema.
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        if (issue.path[0]) fieldErrors[issue.path[0].toString()] = issue.message;
      });
      return { ok: false, reason: "validation", fieldErrors };
    }

    const turnstileOk = await verifyTurnstile(data.turnstileToken, ip);
    if (!turnstileOk) return { ok: false, reason: "turnstile" };

    const accessKey = env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.error("WEB3FORMS_ACCESS_KEY is not configured");
      return { ok: false, reason: "upstream" };
    }

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New Project Brief from ${parsed.data.company}`,
        from_name: parsed.data.fullName,
        email: parsed.data.email,
        company: parsed.data.company,
        sector: parsed.data.sector,
        message: parsed.data.brief,
      }),
    });

    if (!res.ok) return { ok: false, reason: "upstream" };
    return { ok: true };
  });
