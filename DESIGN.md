---
name: MC Cargo Boots
description: Botas de alta competición para patín carrera, hechas a mano en Argentina desde 1990.
colors:
  gris-oscuro: "#111111"
  gris-oscuro-superficie: "#1a1a1a"
  blanco: "#FFFFFF"
  turquesa: "#00A0E3"
  gris-claro: "#B0B0B0"
typography:
  display:
    fontFamily: "Righteous, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "0.03em"
  headline:
    fontFamily: "Rajdhani, sans-serif"
    fontWeight: 700
    letterSpacing: "0.02em"
  body:
    fontFamily: "Poppins, sans-serif"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Poppins, sans-serif"
    fontWeight: 500
    letterSpacing: "0.05em"
rounded:
  pill: "999px"
  md: "0.5rem"
  sm: "0.35rem"
  xs: "0.25rem"
spacing:
  section-y: "4.5rem"
  section-x: "1.25rem"
  gap-sm: "0.6rem"
  gap-md: "1.25rem"
  gap-lg: "2.5rem"
components:
  button-primary:
    backgroundColor: "{colors.turquesa}"
    textColor: "{colors.gris-oscuro}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.75rem"
  button-primary-hover:
    backgroundColor: "#33b5e8"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.turquesa}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.5rem"
  chip-accent:
    backgroundColor: "transparent"
    textColor: "{colors.turquesa}"
    rounded: "{rounded.pill}"
    padding: "0.35rem 0.9rem"
  card-product:
    backgroundColor: "transparent"
    rounded: "{rounded.md}"
    padding: "1.25rem"
---

# Design System: MC Cargo Boots

## Overview

**Creative North Star: "The Carbon Workshop"**

MC Cargo Boots is a family-run Argentine workshop making hand-built carbon-fiber racing skates
since 1990, led by a former national-team skater who is also a mechanical technician specialized in
carbon-fiber/PRFC structures. The visual system reads as that workshop's own record-keeping: dark,
precise, and unornamented, with a single turquoise signal used the way a technician marks the one
measurement that matters and leaves everything else in graphite. Nothing performs enthusiasm the
copy itself refuses to perform — the brand-guide bans empty superlatives and artificial urgency, and
the interface follows the same discipline: no gradients, no glossy 3D badges, no confetti of accent
color pretending to be excitement.

The system is intentionally athletic and confident rather than purely institutional — it can carry
real visual energy (bold type at scale in the hero, decisive contrast, unapologetic dark ground) —
but every point of energy has to come from restraint and precision, never from decoration. A generic
sporting-goods e-commerce look (bright multi-color badges, urgency banners, glossy call-out shapes)
is an explicit anti-reference.

**Key Characteristics:**
- Dark ground, always — `#111111` is the site's default state, not a "dark mode" variant.
- One accent color, used sparingly and only where it means something (action, identity, division).
- Flat surfaces; depth comes from background layering and hairline borders, never shadows.
- Type carries the athletic energy the color palette deliberately withholds.

## Colors

A near-monochrome dark palette with a single, disciplined turquoise signal — names below are the
manual de marca's own (`docs/brand/brand-guide.md` §2), kept verbatim rather than re-styled.

### Primary
- **Turquesa** (`#00A0E3`): the one accent. CTAs, icons, dividers, short highlights, active/hover
  states. Never a background fill beyond small controls (buttons, chips), never used in running
  paragraph text.

### Neutral
- **Gris Oscuro** (`#111111`): the dominant background across the entire site — header, footer,
  every section, the logo's own ground. This is the resting state, not an accent.
- **Gris Oscuro Superficie** (`#1a1a1a`): one step up from the base ground — used only for
  photo/media placeholder surfaces (product cards, gallery placeholders) to separate them from the
  page background without a border or shadow. Not yet a named CSS variable in code; extracted from
  observed usage.
- **Blanco** (`#FFFFFF`): primary text on the dark ground, and the logo's negative version. Carries
  contrast and legibility, never used as a background field.
- **Gris Claro** (`#B0B0B0`): secondary text, technical specs/data, subtitles, and the hairline
  divider color at low opacity.

### Named Rules
**The 20% Rule.** Turquoise never exceeds roughly 20% of any screen's surface and is never the
dominant background of a piece — brand-guide §2, non-negotiable, not a style preference.

**The No-Inversion Rule.** "Gris oscuro domina. Blanco comunica. Turquesa destaca. Gris complementa."
These roles never swap: turquoise doesn't become a body-text color, gray doesn't become a
background, white doesn't become an accent.

## Typography

**Display Font:** Righteous (temporary stand-in for the licensed Blippo-Black; swappable from one
CSS variable, `--font-h1`)
**Headline Font:** Rajdhani (weight 700 — Google Fonts caps below the manual's specified "Black")
**Body Font:** Poppins (Regular/Medium/SemiBold only — no other weights are brand-authorized)

**Character:** A geometric, slightly playful display face for the one big brand moment per page,
paired with a hard-edged technical headline face and a plain, highly legible body face for
everything that has to actually be read — the pairing separates "brand voice" from "information,"
on purpose.

### Hierarchy
- **Display** (400, `clamp(2rem, 5vw, 3.5rem)`, line-height 1.1, Righteous): the hero H1 only. One
  per page.
- **Headline** (700, uppercase, Rajdhani): section H2s (`Sobre nosotros`, `Productos`, `Contacto`,
  `Technical Gallery`). **Not yet on a locked size scale** — most sections inherit the browser
  default (~1.5em); the product-listing group heading is set to `1.15rem`. This is a real gap, not
  a documented decision — a `typeset` pass should establish one consistent H2 scale.
- **Title** (600 SemiBold, Poppins): card/product titles (`h3`), e.g. product names in listing and
  home cards.
- **Body** (400, `1rem`, line-height 1.5, Poppins): running paragraph text — Blanco for primary
  copy, Gris Claro for secondary/supporting copy (bios, descriptions).
- **Data** (500 Medium, Poppins, `~0.75–0.9rem`): technical specs, product data, table cells —
  brand-guide explicitly reserves Medium weight for this role, distinct from body Regular.
- **Label** (500 Medium, Poppins, `0.7–0.85rem`, uppercase + `0.05em` tracking where used): nav
  links, category/line badges (`card-linea`, `card-gama`), pill tags.

### Named Rules
**The Righteous Placeholder Rule.** `--font-h1` is Righteous until the licensed Blippo-Black file
arrives. The swap happens by changing one CSS variable — never hardcode the font per component.

**The Uppercase Rajdhani Rule.** H2 is always uppercase Rajdhani 700. Google Fonts doesn't offer a
900/Black cut, so 700 is the ceiling, not a compromise to fix later.

**The Three-Weight Rule.** Poppins ships in exactly three weights across the whole site: 400
Regular (body), 500 Medium (data/labels), 600 SemiBold (titles/emphasis). No other weight is
brand-authorized.

## Layout

Two container widths carry the whole site: `75rem` (1200px) for structural/wide sections — header,
footer, hero, and card grids (`ProductosHome`, `/productos` listing) — and `60rem` (960px) for
text-forward sections (`Nosotros`, `Contacto`, `Technical Gallery`). Product detail pages narrow
further to `48rem` (768px), matching a single reading column.

Vertical rhythm: sections pad `4.5rem` top/bottom on desktop, `1.25rem` horizontal, with sub-groups
inside a section spaced by `1.5–3rem`. Card grids use `repeat(auto-fit, minmax(15–20rem, 1fr))` so
column count is fluid rather than breakpoint-stepped. Horizontally-scrolling carousels (Nosotros
photos, Technical Gallery) use `scroll-snap-type: x mandatory` instead of a slider library.

Responsive changes are minimal and functional: the nav collapses to a hamburger menu below `56rem`;
footer and product-listing grids stack to a single column below `48rem`. There is no separate
"mobile design" — the same components reflow.

## Elevation & Depth

Flat by design — there is no `box-shadow` anywhere in the current implementation. Depth is conveyed
two ways only: a one-step-lighter background surface (`#1a1a1a` over the `#111111` ground) for
photo/media placeholder areas, and hairline 1px borders — turquoise-tinted (`rgba(0,160,227,.35)`)
around cards and interactive surfaces, neutral gray-tinted (`rgba(176,176,176,.1–.35)`) as section
dividers and hairlines elsewhere.

### Named Rules
**The Flat-By-Default Rule.** No `box-shadow` anywhere in the system. Depth comes from background
layering and 1px borders only — confirmed as a deliberate choice, not a placeholder to revisit.

## Shapes

Two radius families cover everything: **pill** (`999px`) for anything actionable or label-like —
buttons, tags, badges, the region selector — and **soft-corner** (`0.5rem` for cards/media, `0.35rem`
for smaller placeholder boxes, `0.25rem` for tiny inline badges) for content containers. No sharp
corners, no exaggerated rounding beyond the pill family. Borders are always `1px solid`, never
thicker; dashed borders (`1px dashed`, neutral gray) are reserved specifically for unresolved
photo/media placeholders, signaling "not final content" at a glance.

## Components

### Buttons
- **Shape:** pill (`border-radius: 999px`).
- **Primary:** `background: {colors.turquesa}`, text `{colors.gris-oscuro}` (the one place turquoise
  is allowed as a fill — a small control, not a screen), padding `0.85rem 1.75rem`.
- **Hover / Focus:** background lightens to `#33b5e8`.
- **Secondary / Ghost:** transparent background, `1px solid {colors.turquesa}` border, turquoise
  text; hover fills with `rgba(0,160,227,0.1)`.

### Chips / Tags
- **Accent variant** (`valores` list, fit-type badge): transparent background, `1px solid` +
  text in turquoise, pill radius.
- **Neutral variant** (color swatches list): transparent background, `1px solid` neutral gray
  (`rgba(176,176,176,.3)`) + text in Gris Claro, pill radius.

### Cards / Containers
- **Corner Style:** `0.5rem` radius.
- **Background:** transparent (inherits page ground); media area inside uses `{colors.gris-oscuro-superficie}`.
- **Shadow Strategy:** none — see Elevation & Depth.
- **Border:** `1px solid rgba(0,160,227,.35)` — the turquoise-tinted hairline is the card's only
  separation from the page, doing the job a shadow would do elsewhere.
- **Internal Padding:** `1.25rem`.

### Navigation
- Poppins 500, Blanco by default, turquoise on hover/focus, no underline. Mobile collapses under a
  hamburger below `56rem`; the WhatsApp CTA stays a filled turquoise pill icon-button at every size,
  never collapsing into the menu.

### Region Selector (signature component)
Pill trigger button (flag emoji + region label) with a neutral gray border that turns turquoise on
hover/focus; opens a small popover list with a turquoise-tinted hover highlight per option. Resolves
region client-side (localStorage → geo-IP hint cookie → default) and rewrites every WhatsApp CTA's
message on the page — see `docs/specs/010-i18n-region.md`.

## Do's and Don'ts

### Do:
- **Do** keep `#111111` as the default, dominant background on every page — this is not a
  "dark mode" toggle, it's the only mode.
- **Do** reserve turquoise for CTAs, icons, dividers, and short highlights — never a body-text color,
  never a dominant fill.
- **Do** keep Poppins to exactly three weights: 400 / 500 / 600.
- **Do** keep H2 uppercase Rajdhani 700, everywhere it appears.
- **Do** label every placeholder visibly as temporary (stock photos, the text logo, mock contact
  data, "not yet translated" banners) — this is an established, load-bearing pattern in the
  codebase, not incidental.

### Don't:
- **Don't** use turquoise in running paragraph text, as a dominant background, or on light-gray text
  (all three are explicitly prohibited combinations, `docs/00-constitution.md`).
- **Don't** put gray text on a turquoise background, or light-gray text on white — both fail
  brand-guide's contrast rules.
- **Don't** add `box-shadow` anywhere — depth is background-layering and hairline borders only.
- **Don't** recolor, deform, rotate, or add shadows/effects to the logo, real or placeholder.
- **Don't** invent product photography, testimonials, or press mentions — none exist yet; treat
  their absence as fact to state, not a gap to fill.
