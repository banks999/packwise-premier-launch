---
name: Pack-Wise
description: Pharmaceutical packaging consulting — regulatory compliance, sourcing, and cost optimization.
colors:
  navy: "#1C2A44"
  navy-deep: "#1C2A44"
  bio-yellow: "#F1EC80"
  gold-deep: "#B9B24E"
  neutral-canvas: "#F6F7F9"
  neutral-bg: "#FFFFFF"
  neutral-ink: "#5A5F68"
  neutral-heading: "#1C2A44"
  neutral-muted: "#9AA0A9"
  neutral-border: "#E8EAEE"
  input-border: "#D9DCE2"
  destructive: "#EF4444"
typography:
  display:
    fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 4.4vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.625rem, 3.4vw, 2.375rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "Mulish, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.2em"
rounded:
  none: "0px"
  sm: "4px"
  md: "6px"
  lg: "8px"
  xl: "12px"
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
    rounded: "{rounded.lg}"
    padding: "16px 32px"
  card:
    backgroundColor: "{colors.neutral-bg}"
    rounded: "{rounded.none}"
    padding: "30px 26px"
  input:
    backgroundColor: "{colors.neutral-bg}"
    rounded: "{rounded.none}"
    padding: "13px 15px"
---

# Design System: Pack-Wise

## 1. Overview

**Creative North Star: "The Compliance Blueprint"**

Pack-Wise reads as an engineering-grade document, not a marketing brochure: deep navy carries the authority of a controlled drawing, bio-yellow marks the places that matter — the way a reviewer's highlighter or a schematic's callout would — and a faint world map behind hero sections signals the regulated, cross-border markets the firm operates in. The system is confident and specific rather than warm-and-fuzzy; every surface should feel like it belongs to a firm that has actually done this before, at scale, under real regulatory pressure — approachable in tone, but never soft in execution.

It explicitly rejects the generic, templated "consulting agency" look — stock-photo warmth, interchangeable icon-grid sections, and decoration standing in for substance. Specificity (named formats, named regulations, a named founder with 32 years of experience) is what carries the premium feel here, not ornament.

**Key Characteristics:**

- Navy-and-bio-yellow as a controlled two-color system; no incidental third hues beyond a deep-gold text tint, functional neutrals, and a destructive red.
- Flat yellow rules and squares — an eyebrow bar, a short card underline, square bullets — as the recurring signature marks, used consistently rather than varied.
- Square, hairline-bordered surfaces at rest; only the pill-radius CTA buttons round their corners.
- Flat surfaces at rest; a soft lift + navy/bio-tinted shadow appears only as a hover response, never as baseline elevation.
- Eyebrow labels + section headers follow one repeatable rhythm across every page.

## 2. Colors

A restrained, two-color brand system (navy + bio-yellow) laid over cool, low-chroma neutrals — nothing competes with the accent.

### Primary

- **Navy** (`#1C2A44`): the brand's authority color. Headings, primary text-on-yellow, active nav states, full-bleed dark sections (CTA banners, footer, the contact page's info panel), and heading ink on light surfaces.

### Secondary

- **Bio Yellow** (`#F1EC80`): the signature accent. Every primary call-to-action, active nav underline, eyebrow bar, card underline, and square bullet. Reserved for things that must be noticed — never used decoratively or as a fill for large surfaces.
- **Deep Gold** (`#B9B24E`, tagline `#B7A53A`): a darkened bio-yellow used only where yellow would fail contrast on white — the numbered service labels and the logo tagline. Not a third brand color; a legibility variant of the accent.

### Neutral

- **Cool Slate Canvas** (`#F6F7F9`): alternate section background, used to break up long pages without introducing a new hue.
- **Paper White** (`#FFFFFF`): default background and card surface.
- **Body Ink** (`#5A5F68`): default paragraph text.
- **Muted Slate** (`#9AA0A9`): supporting/label-caption text.
- **Hairline Border** (`#E8EAEE`): card borders, dividers. Inputs use a slightly stronger `#D9DCE2`.
- **Alert Red** (`#EF4444`): form validation errors only.

### Named Rules

**The Two-Color Rule.** The brand vocabulary is navy + bio-yellow, full stop. The deep-gold text tint is a contrast-safe variant of the yellow, not a new hue. Any other color proposal must justify itself against these before being added.

**The Earned Yellow Rule.** Bio-yellow marks importance, not decoration. If yellow appears more than once per section as an accent mark, or is used as a large background fill, it has stopped meaning "pay attention here."

## 3. Typography

**Display Font:** Poppins (with ui-sans-serif, system-ui fallback)
**Body Font:** Mulish (with ui-sans-serif, system-ui fallback)

**Character:** A geometric, corporate-grotesque display face paired with a neutral, highly legible humanist body sans — the pairing reads as "precise document" rather than "editorial" or "playful." The two families are deliberately distinct (geometric display vs. humanist body), never interchangeable.

### Hierarchy

- **Display** (700 weight, `clamp(1.875rem, 4.4vw, 3.25rem)`, 1.1 line-height, -0.015em tracking): hero H1s only.
- **Headline** (700 weight, `clamp(1.625rem, 3.4vw, 2.375rem)`, 1.15 line-height, -0.01em tracking): section-level H2s.
- **Title** (600 weight, ~1.19rem, 1.3 line-height): card and sub-section H3s.
- **Body** (400 weight, 1rem–1.25rem, 1.6 line-height, relaxed): paragraph copy. Cap prose measure at 56–75ch.
- **Label** (600 weight, ~0.78rem, 0.2em tracking, uppercase): eyebrows, form field labels, info-row labels.

### Named Rules

**The One Eyebrow Rule.** Uppercase tracked labels (Poppins, `font-semibold`, `tracking-[0.2em]`) are reserved for the section-eyebrow and field-label roles only — don't introduce a second, competing small-caps treatment elsewhere on the page.

## 4. Elevation

Pack-Wise is flat by default. Cards, inputs, and the header sit at zero elevation at rest — depth is conveyed by the navy/border hairline and background-color contrast, not shadow. Shadows exist purely as a _hover response_, tinted with the brand color rather than neutral gray, reinforcing that the navy/bio lift is the "you are being invited to act" signal.

### Shadow Vocabulary

- **CTA hover** (`transform: translateY(-2px) scale(1.012)` + `0 12px 26px rgba(28,42,68,0.3)` on light, `rgba(0,0,0,0.35)` on navy): a lift-and-glow under the primary button on hover, using a spring easing (`cubic-bezier(.34,1.56,.64,1)`).

### Named Rules

**The Flat-By-Default Rule.** No surface has a resting shadow. If something looks like it needs elevation at rest, use a border or background-color shift instead; shadows are reserved entirely for hover/interaction feedback.

## 5. Components

Overall feel: **quietly confident and engineered** — flat, square, hairline-bordered surfaces, flat yellow accent marks, a subtle spring lift only on hover. Nothing decorative; every visual element earns its place.

### Buttons

- **Shape:** `rounded-lg` (8px) — the one place corners round; the pill-ish CTA reads as the actionable element against otherwise square surfaces.
- **Primary:** bio-yellow background, navy text, Poppins semibold, sized `px-8 py-4` for hero-scale CTAs down to `px-[22px] py-3` in the header. Carries an inset navy hairline (`inset 0 0 0 1px rgba(28,42,68,0.2)`).
- **Hover / Focus:** spring lift (`translateY(-2px) scale(1.012)`) plus a navy/bio-tinted glow shadow; transitions use the spring easing above.
- **Disabled:** `opacity-70`, cursor not-allowed (see the contact form's submit button while loading).

### Accent Marks (signature)

- **Eyebrow bar:** a 4px × 16px solid bio-yellow block preceding each uppercase eyebrow label.
- **Card underline:** a ~34px × 4px bio-yellow rule at the top of "who we work with" cards; a 56px × 3px centered rule above centered section intros.
- **Square bullets:** 10px bio-yellow squares (not dots, not checks) for "why us" / experience lists.
- These flat rectangles are the recurring signature — never rounded into circles or replaced with iconography.

### Cards / Containers

- **Corner Style:** square (`rounded-none`) — cards, inputs, and dark panels all keep hard corners; only buttons round.
- **Background:** white/`--color-card` on light sections; `navy` on dark feature panels and the CTA band.
- **Shadow Strategy:** flat at rest; navy-tinted lift on hover for interactive cards.
- **Border:** 1px hairline (`border-border`). Service grid uses a 2px hairline gap between cells; feature panels take a 4px bio-yellow left/top border as a callout.
- **Internal Padding:** `p-[30px 26px]`–`p-8` standard, `p-10`–`p-12` for the contact-page dark panel.

### Inputs / Fields

- **Style:** square, 1px `border-input`, white background, `px-[15px] py-[13px]`, label above in the uppercase tracked Label style.
- **Focus:** border shifts to navy.
- **Error:** border and background tint toward `destructive` (`border-destructive/60 bg-destructive/5`), with an inline red message beside the label.

### Navigation

- Sticky header, solid white with a hairline bottom border. Logo lockup is the PW mark + wordmark with a deep-gold "Packaging that performs" tagline beneath.
- Links are navy Poppins; hover and active states draw a 2px bio-yellow underline beneath the link.
- The header's own CTA button always mirrors the primary button style (bio-yellow, navy text).
- Mobile: hamburger toggle (`Menu`/`X` icons) opens a full-width dropdown panel with the same link list stacked, plus the same CTA button full-width at the bottom.

## 6. Do's and Don'ts

### Do:

- **Do** keep the brand vocabulary to exactly two colors (navy + bio-yellow, with deep-gold as the contrast-safe yellow variant) plus cool neutrals and the single destructive red — the "Two-Color Rule."
- **Do** reserve bio-yellow for the one thing per section that should be noticed (a CTA, an active state, an eyebrow/underline mark) — the "Earned Yellow Rule."
- **Do** keep every design decision reading as operationally specific and precise (named formats, named regulations, named years of experience) rather than generic.
- **Do** use the flat yellow bar/square as the single recurring accent mark; don't reintroduce icon-container badges alongside it.
- **Do** keep every page converging on the single "Schedule a Consultation" CTA — no competing secondary ask.

### Don't:

- **Don't** ship the generic, templated "consulting agency" look — stock-photo warmth, interchangeable icon-grid sections, decoration standing in for substance.
- **Don't** add a resting/baseline shadow to any card, input, or button — shadows in this system exist only as hover feedback, always brand-tinted, never neutral gray (the "Flat-By-Default Rule").
- **Don't** round card, panel, or input corners — square surfaces are the system; only buttons take a radius (`rounded-lg`, 8px), and never a soft/bubbly one.
- **Don't** introduce a second small-caps/tracked-uppercase treatment beyond the eyebrow/label role (the "One Eyebrow Rule").
- **Don't** add a secondary CTA (newsletter signup, resource download, etc.) alongside "Schedule a Consultation" without a deliberate strategy change — the funnel is single-path by design.
