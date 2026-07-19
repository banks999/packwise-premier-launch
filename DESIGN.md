---
name: Pack-Wise
description: Pharmaceutical packaging consulting — regulatory compliance, sourcing, and cost optimization.
colors:
  navy: "#1A263E"
  navy-deep: "#0F172A"
  bio-yellow: "#FFF493"
  neutral-canvas: "#F8FAFC"
  neutral-bg: "#FFFFFF"
  neutral-ink: "#0F172A"
  neutral-muted: "#64748B"
  neutral-border: "#E2E8F0"
  destructive: "#EF4444"
typography:
  display:
    fontFamily: "Space Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Space Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 3vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Space Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.18em"
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  xl: "12px"
  2xl: "16px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.bio-yellow}"
    textColor: "{colors.navy}"
    rounded: "{rounded.md}"
    padding: "16px 28px"
  button-primary-hover:
    backgroundColor: "{colors.bio-yellow}"
    textColor: "{colors.navy}"
  card:
    backgroundColor: "{colors.neutral-bg}"
    rounded: "{rounded.xl}"
    padding: "28px"
  input:
    backgroundColor: "{colors.neutral-bg}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
---

# Design System: Pack-Wise

## 1. Overview

**Creative North Star: "The Compliance Blueprint"**

Pack-Wise reads as an engineering-grade document, not a marketing brochure: deep navy carries the authority of a controlled drawing, bio-yellow marks the places that matter — the way a reviewer's highlighter or a schematic's callout would — and the hex-grid pattern behind dark sections stands in for the molecular, regulatory precision the firm sells. The system is confident and specific rather than warm-and-fuzzy; every surface should feel like it belongs to a firm that has actually done this before, at scale, under real regulatory pressure — approachable in tone, but never soft in execution.

It explicitly rejects the generic, templated "consulting agency" look — stock-photo warmth, interchangeable icon-grid sections, and decoration standing in for substance. Specificity (named formats, named regulations, a named founder with 32 years of experience) is what carries the premium feel here, not ornament.

**Key Characteristics:**
- Navy-and-bio-yellow as a controlled two-color system; no incidental third hues beyond functional neutrals and a destructive red.
- Hex-clip badges and hex-grid texture as the one recurring signature motif, used consistently rather than varied.
- Flat surfaces at rest; color-tinted glow shadows appear only as a hover response, never as baseline elevation.
- Eyebrow labels + section headers follow one repeatable rhythm across every page.

## 2. Colors

A restrained, two-color brand system (navy + bio-yellow) laid over cool, low-chroma neutrals — nothing competes with the accent.

### Primary
- **Navy** (`#1A263E` / `oklch(0.27 0.05 260)`): the brand's authority color. Headings, primary text-on-yellow, default nav/card hover states, icon-badge backgrounds on light surfaces.
- **Midnight Navy** (`#0F172A` / `oklch(0.21 0.04 260)`): the deep-space variant used for full-bleed dark sections (hero, CTA banners, the contact page's info panel) and as the body-text ink color on light surfaces.

### Secondary
- **Bio Yellow** (`#FFF493` / `oklch(0.96 0.12 105)`): the signature accent. Every primary call-to-action, active nav state, hex-clip icon badges, and the one line of copy per section worth remembering. Reserved for things that must be noticed — never used decoratively or as a fill for large surfaces.

### Neutral
- **Cool Slate Canvas** (`#F8FAFC`): alternate section background, used to break up long pages without introducing a new hue.
- **Paper White** (`#FFFFFF`): default background and card surface.
- **Muted Slate** (`#64748B`): secondary/supporting body text (`text-muted-foreground`).
- **Hairline Border** (`#E2E8F0`): card borders, input borders, dividers.
- **Alert Red** (`#EF4444`): form validation errors only.

### Named Rules
**The Two-Color Rule.** The brand vocabulary is navy + bio-yellow, full stop. Any new color proposal must justify itself against these two before being added — extra accent hues dilute the "controlled document" read this system depends on.

**The Earned Yellow Rule.** Bio-yellow marks importance, not decoration. If yellow appears more than once per section, or is used as a large background fill, it has stopped meaning "pay attention here."

## 3. Typography

**Display Font:** Space Grotesk (with ui-sans-serif, system-ui fallback)
**Body Font:** Inter (with ui-sans-serif, system-ui fallback)

**Character:** A geometric, slightly technical display face paired with a neutral, highly legible body sans — the pairing reads as "precise document" rather than "editorial" or "playful." The two families are deliberately distinct (geometric display vs. humanist body), never interchangeable.

### Hierarchy
- **Display** (600 weight, `clamp(2.25rem, 5vw, 4.5rem)`, 1.02 line-height, -0.02em tracking): hero H1s only. Always paired with one bio-yellow phrase for emphasis.
- **Headline** (600 weight, `clamp(1.875rem, 3vw, 3rem)`, 1.05 line-height): section-level H2s (`SectionHeader`).
- **Title** (600 weight, 1.25rem, 1.3 line-height): card and sub-section H3s.
- **Body** (400 weight, 1rem–1.125rem, 1.6 line-height, relaxed): paragraph copy. Cap prose measure at 65–75ch.
- **Label** (600 weight, 0.75rem, 0.18em tracking, uppercase): eyebrows, form field labels, info-row labels.

### Named Rules
**The One Eyebrow Rule.** Uppercase tracked labels (`text-xs font-semibold uppercase tracking-[0.18em]`) are reserved for the section-eyebrow and field-label roles only — don't introduce a second, competing small-caps treatment elsewhere on the page.

## 4. Elevation

Pack-Wise is flat by default. Cards, inputs, and the navbar sit at zero elevation at rest — depth is not conveyed by shadow at all in the resting state, only by the navy/border hairline and background-color contrast. Shadows exist purely as a *hover response*, and they are always tinted with the brand color rather than neutral gray, reinforcing that yellow/navy glow is the "you are being invited to act" signal.

### Shadow Vocabulary
- **Card hover** (`box-shadow: 0 10px 30px -10px color-mix(in oklch, var(--color-navy) 5%, transparent)`, i.e. `hover:shadow-lg hover:shadow-navy/5`): a barely-there navy-tinted lift on service/expertise/differentiator cards.
- **CTA hover** (`hover:shadow-xl hover:shadow-bio/20` to `/30`): a stronger bio-yellow glow under the primary button on hover, scaling with how prominent the CTA is (hero > form submit > nav).

### Named Rules
**The Flat-By-Default Rule.** No surface has a resting shadow. If something looks like it needs elevation at rest, use a border or background-color shift instead; shadows are reserved entirely for hover/interaction feedback.

## 5. Components

Overall feel: **quietly confident and engineered** — flat at rest, precise hex-clip icon badges, a subtle colored glow only on hover. Nothing decorative; every visual element earns its place.

### Buttons
- **Shape:** `rounded-md` (6px) — never more rounded than this; sharp-ish corners reinforce the "engineered document" read.
- **Primary:** bio-yellow background, navy text, semibold, sized `px-7 py-4` for hero-scale CTAs down to `px-4 py-2.5` in the navbar. The nav variant adds a subtle `ring-1 ring-navy/10`.
- **Hover / Focus:** background darkens slightly (`bg-bio/90`) and a bio-tinted glow shadow appears (`hover:shadow-xl hover:shadow-bio/20–30`); all transitions use `transition-all`.
- **Disabled:** `opacity-70`, cursor not-allowed (see the contact form's submit button while loading).

### Icon Badges (signature component)
- **Shape:** hexagonal via `clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)` (the `hex-clip` utility), sized `h-10 w-11`.
- **On light surfaces:** navy background, bio-yellow icon/text.
- **On dark surfaces (differentiator cards, contact info rows):** bio-yellow (or `bio/15` translucent) background, navy or bio-yellow icon.
- This is the one recurring signature shape in the system — used for every service/expertise/differentiator/info-row icon, never varied to a circle or square.

### Cards / Containers
- **Corner Style:** `rounded-xl` (12px) for standard cards; `rounded-2xl` (16px) for the larger contact-page panels.
- **Background:** white/`--color-card` on light sections, `navy-deep` with `hex-grid` texture on dark feature panels.
- **Shadow Strategy:** flat at rest; navy-tinted lift on hover (see Elevation).
- **Border:** 1px hairline (`border-border`), brightening to `border-navy/40` on hover.
- **Internal Padding:** `p-7`–`p-8` standard, `p-10`–`p-12` for the contact-page dark panel.

### Inputs / Fields
- **Style:** `rounded-md`, 1px `border-input`, white background, `px-4 py-3`, label above in the uppercase tracked Label style.
- **Focus:** border shifts to navy, plus a `ring-2 ring-navy/20` glow.
- **Error:** border and background tint toward `destructive` (`border-destructive/60 bg-destructive/5`), with an inline red message beside the label.

### Navigation
- Fixed header, transparent + light blur at the top of the page, gaining a stronger blur and a hairline bottom border once scrolled (`scrolled` state, 300ms transition).
- Links are `text-foreground/70`, hovering and active states shift to solid navy; the active link also gains `font-semibold`.
- The nav's own CTA button always mirrors the primary button style (bio-yellow, navy text).
- Mobile: hamburger toggle (`Menu`/`X` icons) opens a full-width dropdown panel with the same link list stacked, plus the same CTA button full-width at the bottom.

## 6. Do's and Don'ts

### Do:
- **Do** keep the brand vocabulary to exactly two colors (navy + bio-yellow) plus cool neutrals and the single destructive red — the "Two-Color Rule."
- **Do** reserve bio-yellow for the one thing per section that should be noticed (a CTA, an active state, a highlighted phrase) — the "Earned Yellow Rule."
- **Do** keep every design decision reading as operationally specific and precise (named formats, named regulations, named years of experience) rather than generic — this is the "quietly confident and engineered" component philosophy applied to content, not just shape.
- **Do** use the hex-clip badge as the single recurring icon-container shape; don't introduce a second icon-container style (circles, squares) alongside it.
- **Do** keep every page converging on the single "Schedule a Consultation" CTA — no competing secondary ask.

### Don't:
- **Don't** ship the generic, templated "consulting agency" look — stock-photo warmth, interchangeable icon-grid sections, decoration standing in for substance (per PRODUCT.md's anti-reference).
- **Don't** add a resting/baseline shadow to any card, input, or button — shadows in this system exist only as hover feedback, always brand-tinted, never neutral gray (the "Flat-By-Default Rule").
- **Don't** round corners past `rounded-2xl` (16px) anywhere, and never use a soft/bubbly radius on buttons — it undercuts the engineered-document feel.
- **Don't** introduce a second small-caps/tracked-uppercase treatment beyond the eyebrow/label role (the "One Eyebrow Rule").
- **Don't** add a secondary CTA (newsletter signup, resource download, etc.) alongside "Schedule a Consultation" without a deliberate strategy change — the funnel is single-path by design.
