# Prompt for Claude Code

> Paste everything below into Claude Code from the repo root.
> Do the manual steps at the bottom yourself — Claude Code can't do them.

---

You are working on the Pack-Wise marketing site: TanStack Start + React 19 + Tailwind 4, SSR on Cloudflare Workers. Read `docs/PRODUCT.md` and `docs/DESIGN.md` first — they define the audience (pharma VP/Director evaluating a consultant) and the single-funnel CTA rule. Don't violate those.

Work through the tasks below **in order**, committing after each numbered task with a real commit message. Run `npx tsc --noEmit && npm run lint` before every commit. Do not batch unrelated changes into one commit.

Before you start: there are ~9 uncommitted modified files in the working tree. Show me `git diff --stat`, summarize what changed, and commit that existing work as its own commit before touching anything new.

## 1. Contact form — leave the architecture alone, tidy the edges

**Note:** the Web3Forms access key in `.env` is *not* a secret. Per Web3Forms' own docs it's an alias for the destination email address and is designed to live in client-side code. Do not treat it as a leaked credential, do not move it server-side for security reasons, and do not propose rotating it.

Moving submission into a server function would buy control (rate limiting, logging, provider swap without redeploy) but no security. That's out of scope for now. Only do this:

- Extract the zod schema from `src/routes/contact.tsx` into `src/lib/contact-schema.ts` so it's reusable if submission does move server-side later.
- Leave the honeypot in place.
- Preserve all existing accessibility behavior: `aria-invalid`, `aria-describedby`, `role="alert"`, per-field error clearing on input.
- Leave the CSP in `src/server.ts` as-is; `api.web3forms.com` still needs to be in `connect-src` and `form-action`.

## 2. Add a thank-you route

Replace the toast-only success state with a redirect to `/contact/thank-you`.

- Match existing page styling and the navy/bio brand tokens.
- Reassure the visitor: brief received, reviewed under NDA, response within 24 business hours.
- Add per-route meta but mark it `noindex` — it should not be in search results or `public/sitemap.xml`.
- This URL becomes the conversion goal for analytics, so make sure it's a real navigation, not just local state.

## 3. Add analytics

`docs/PRODUCT.md` defines success as a visitor scheduling a consultation, and there is currently no measurement of that at all.

- Add Cloudflare Web Analytics (free, cookieless, no consent banner needed) in `src/routes/__root.tsx`.
- Add the required domain to the CSP.
- Confirm `/contact/thank-you` pageviews will be distinguishable so conversion rate is derivable.

## 4. Set up CI

Add `.github/workflows/ci.yml` running on push and PR: install deps, then `tsc --noEmit`, `eslint .`, `prettier --check .`, and `npm run build`. Use one package manager consistently — see task 6.

## 5. Verify accessibility claims

`docs/PRODUCT.md` promises a WCAG AA baseline; nothing indicates it has been checked.

- Compute actual contrast ratios for the brand token combinations in `src/styles.css`, especially `text-bio/80` and `text-white/70` on `--navy-deep`, at the small uppercase 0.18em-tracking sizes used across the site. Report the numbers before changing anything.
- Fix any pair below 4.5:1 for body text or 3:1 for large text, adjusting opacity rather than the base brand hues.
- In `src/components/site/Navbar.tsx`, add to the mobile menu: Escape-to-close, focus trap while open, focus return to the toggle button on close, and body scroll lock.
- Verify the `fixed` header doesn't obscure content on keyboard focus or anchor navigation.

## 6. Housekeeping

- Both `bun.lock` and `package-lock.json` exist, and `package-lock.json` is gitignored while `bun.lock` isn't. Pick **one** package manager, delete the other lockfile, and make `.gitignore` and CI consistent with the choice.
- `hero-plant` exists as both `src/assets/hero-plant.webp` and `public/hero-plant.jpg`. Determine which is actually referenced and delete the dead one.
- Add `fetchpriority="high"` and explicit `width`/`height` to the hero image in `src/routes/index.tsx` — it's the LCP element and currently has neither.
- Rename `src/components/site/TrustedByMarquee.tsx` to `TrustedBy.tsx` (and the exported component to match). It renders a static flex-wrap list; the "Marquee" name is left over from a removed implementation.

## 7. Report back, don't act

One item needs my decision. Investigate and report — do **not** change it:

- **The "Trusted By" client names** (PHARMA CORP, BIO-MED, GLOBAL HEALTH, APEX LABS, SYNTHESIS) read as placeholder text to the executive audience, even though `docs/PRODUCT.md` says they're real. Lay out the options — real logos with written permission, a differently-framed proof section, or removing it — with the tradeoff of each against the belief ladder in `PRODUCT.md`.

## Constraints

- Don't add dependencies without telling me what and why first.
- Don't restructure routing, the design system, or `src/styles.css` tokens.
- Don't touch `src/routeTree.gen.ts` (generated).
- Preserve the SSR error handling in `src/server.ts`, `src/start.ts`, and `src/lib/error-capture.ts` — the h3 swallowed-throw workaround is deliberate and hard-won.
- Keep the single-CTA funnel rule from `docs/PRODUCT.md`. No competing secondary asks.

---

## Do these yourself (Claude Code can't)

1. **Enable Cloudflare Web Analytics** for the zone and copy the token — needed for task 3.
2. **Optional:** if the contact form ever does attract spam, Web3Forms' Pro tier has a Trusted Domains setting that restricts submissions to your domain. Cheaper than building bot protection yourself.
