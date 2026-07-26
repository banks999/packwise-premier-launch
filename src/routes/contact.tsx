import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Container, Eyebrow, Hero } from "@/components/site/blocks";
import { contactSchema } from "@/lib/contact-schema";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Pack-Wise | Pharmaceutical Packaging Consulting" },
      {
        name: "description",
        content:
          "Contact Pack-Wise for confidential pharmaceutical packaging consulting, regulatory compliance support, and packaging sourcing brief reviews within 24 business hours.",
      },
      {
        name: "keywords",
        content:
          "pharmaceutical packaging consulting contact, pharma packaging compliance inquiry, packaging sourcing consultant contact",
      },
      { property: "og:title", content: "Contact Pack-Wise | Pharmaceutical Packaging Consulting" },
      {
        property: "og:description",
        content:
          "Contact Pack-Wise for confidential pharmaceutical packaging consulting, regulatory compliance support, and packaging sourcing brief reviews within 24 business hours.",
      },
      { property: "og:url", content: "https://pack-wise.in/contact" },
      { name: "twitter:title", content: "Contact Pack-Wise | Pharmaceutical Packaging Consulting" },
      {
        name: "twitter:description",
        content:
          "Contact Pack-Wise for confidential pharmaceutical packaging consulting, regulatory compliance support, and packaging sourcing brief reviews within 24 business hours.",
      },
    ],
    links: [{ rel: "canonical", href: "https://pack-wise.in/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          mainEntity: {
            "@type": "Organization",
            name: "Pack-Wise",
            url: "https://pack-wise.in/",
            logo: "https://pack-wise.in/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer support",
              telephone: "+1 640-203-0743",
              email: "info@pack-wise.in",
            },
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

// Web3Forms access key. This is public by design — it's an alias for the
// destination email, not a secret — so it's safe to bundle into client JS.
// Must be present at BUILD time: set VITE_WEB3FORMS_ACCESS_KEY in the
// Cloudflare Workers build environment variables (and in .env for local dev).
const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? "";

type Sector = "" | "Pharmaceutical" | "Nutraceutical" | "Contract Packaging" | "Packaging" | "Other";

function ContactPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    company: "",
    sector: "" as Sector,
    brief: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const update = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: "" }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;

    const parsed = contactSchema.safeParse(form);

    if (!parsed.success) {
      const newErrors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        if (issue.path[0]) newErrors[issue.path[0].toString()] = issue.message;
      });
      setErrors(newErrors);
      toast.error("Please fix the errors in the form.");
      return;
    }

    setErrors({});
    if (!web3FormsAccessKey) {
      toast.error(
        "Form is not configured yet. Set VITE_WEB3FORMS_ACCESS_KEY in the build environment.",
      );
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: web3FormsAccessKey,
          subject: `New Project Brief from ${form.company}`,
          from_name: form.fullName,
          email: form.email,
          company: form.company,
          sector: form.sector,
          message: form.brief,
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      navigate({ to: "/contact/thank-you" });
    } catch {
      toast.error("Something went wrong. Please check your connection and retry.");
      setLoading(false);
    }
  };

  return (
    <>
      <Hero
        eyebrow="Contact Us"
        title="Connect with an Executive Advisor."
        subtitle="Confidential brief reviews within 24 business hours."
        titleMaxWidth="16ch"
      />

      <section>
        <Container className="flex flex-wrap gap-[clamp(36px,5vw,72px)] py-[clamp(52px,7vw,92px)]">
          {/* Direct contact */}
          <div className="min-w-[260px] flex-1 basis-[280px]">
            <Eyebrow className="mb-8">Direct Contact</Eyebrow>
            <div className="flex flex-col gap-[30px]">
              <ContactItem label="Email" value="info@pack-wise.in" href="mailto:info@pack-wise.in" />
              <ContactItem label="USA" value="+1 640 203 0743" href="tel:+16402030743" />
              <ContactItem label="India" value="+91 98209 24862" href="tel:+919820924862" />
              <div className="border-t border-border pt-6">
                <p className="text-[14.5px] leading-relaxed text-foreground">
                  Serving pharmaceutical and nutraceutical packaging suppliers across the United
                  States and India.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="min-w-[300px] flex-[1.3_1_360px] border border-t-4 border-border border-t-bio bg-slate-canvas p-[clamp(28px,3.5vw,44px)]"
          >
            <h2 className="mb-2 font-display text-[clamp(22px,2.6vw,28px)] font-bold text-navy">
              Submit a Brief
            </h2>
            <p className="mb-[30px] text-[13.5px] text-foreground">
              All fields required. Reviewed under NDA.
            </p>

            <input
              type="text"
              name="botcheck"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute left-[-9999px] h-0 w-0 overflow-hidden opacity-0"
            />

            <div className="flex flex-col gap-5">
              <Field id="fullName" label="Full Name" error={errors.fullName}>
                <input
                  id="fullName"
                  value={form.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                  maxLength={100}
                  className={inputCls(!!errors.fullName)}
                  placeholder="Your name"
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                />
              </Field>

              <Field id="email" label="Corporate Email" error={errors.email}>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  maxLength={255}
                  className={inputCls(!!errors.email)}
                  placeholder="you@company.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
              </Field>

              <Field id="company" label="Company Name" error={errors.company}>
                <input
                  id="company"
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                  maxLength={150}
                  className={inputCls(!!errors.company)}
                  placeholder="Your company"
                  aria-invalid={!!errors.company}
                  aria-describedby={errors.company ? "company-error" : undefined}
                />
              </Field>

              <Field id="sector" label="Sector" error={errors.sector}>
                <select
                  id="sector"
                  value={form.sector}
                  onChange={(e) => update("sector", e.target.value as Sector)}
                  className={inputCls(!!errors.sector)}
                  aria-invalid={!!errors.sector}
                  aria-describedby={errors.sector ? "sector-error" : undefined}
                >
                  <option value="" disabled>
                    Select a sector
                  </option>
                  <option>Pharmaceutical</option>
                  <option>Nutraceutical</option>
                  <option>Contract Packaging</option>
                  <option>Packaging</option>
                  <option>Other</option>
                </select>
              </Field>

              <Field id="brief" label="Project Brief" error={errors.brief}>
                <textarea
                  id="brief"
                  value={form.brief}
                  onChange={(e) => update("brief", e.target.value)}
                  maxLength={2000}
                  rows={5}
                  className={inputCls(!!errors.brief) + " resize-y"}
                  placeholder="Tell us about your objective, markets, and packaging scope."
                  aria-invalid={!!errors.brief}
                  aria-describedby={errors.brief ? "brief-error" : undefined}
                />
              </Field>

              <button
                type="submit"
                disabled={loading}
                className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-bio px-6 py-4 font-display text-[15px] font-semibold text-navy ring-1 ring-inset ring-navy/20 transition-all duration-200 ease-[cubic-bezier(.34,1.56,.64,1)] hover:-translate-y-0.5 hover:scale-[1.008] hover:shadow-[0_12px_26px_rgba(28,42,68,0.3)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Processing…
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </Container>
      </section>
    </>
  );
}

const inputCls = (hasError: boolean) =>
  `w-full border ${
    hasError ? "border-destructive/60 bg-destructive/5" : "border-input bg-white focus:border-navy"
  } px-[15px] py-[13px] text-[15px] text-navy placeholder:text-muted-foreground outline-none transition-colors`;

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block" htmlFor={id}>
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <span className="font-display text-[13px] font-semibold tracking-[0.03em] text-navy">
          {label}
        </span>
        {error && (
          <span id={`${id}-error`} role="alert" className="text-xs font-medium text-destructive">
            {error}
          </span>
        )}
      </div>
      {children}
    </label>
  );
}

function ContactItem({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <div>
      <span className="mb-2 block font-display text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </span>
      <a
        href={href}
        className="font-display text-[19px] font-medium text-navy transition-colors hover:text-[#B9B24E]"
      >
        {value}
      </a>
    </div>
  );
}
