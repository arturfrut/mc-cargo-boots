# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Competitive speed skaters (patín carrera) buying directly for themselves — mostly adult/advanced
adolescent athletes who already know their own foot measurements and technical fit requirements.
Copy can be direct and technical; it doesn't need to explain the sport or basic terminology.
Primary regions: Argentina and Colombia, plus international ("Global") buyers — the site detects
region by IP at the edge and lets the user override it manually (see `docs/specs/010-i18n-region.md`).

## Product Purpose

Marketing/catalog site for MC Cargo Boots, a family-run Argentine factory making handmade
high-competition speed-skating boots since 1990. The site lets buyers browse the model catalog,
compare technical specs (materials, sole, size range, per-size anchor measurements), pick a fit
type (stock vs. semi-custom), and start a purchase conversation — via WhatsApp or a measurement
form. It is not a transactional e-commerce site: there is no cart or checkout, by design.

## Positioning

Led by Sergio Mc Cargo — a former national-team skater and world-championship medalist who is also
a mechanical technician specialized in carbon-fiber and PRFC structures. The differentiator a
generic competitor cannot truthfully copy: elite competitive skating experience combined with
structural/materials engineering expertise, applied to every boot that leaves the workshop.

## Operating Context

- Catalog: 7 models across 4 product lines (Ultra Light+, Classic, Núcleo, F4), sizes 30–47.
  `docs/catalog/catalogo.json` is the single source of truth for all product specs/descriptions —
  never hand-transcribed elsewhere.
- Fit path: `tipo_ajuste` on each model (`stock` or `semi-custom`) maps to a specific measurement
  form (`docs/specs/007-formularios.md`, not yet implemented — intentionally skipped for now).
- Conversion path: every CTA (hero, product cards, product detail, contact section) points to
  WhatsApp, not a checkout. The message is region-aware (mentions Argentina/Colombia/"from abroad").
- Region/language: Argentina, Colombia, and Global (→ English) are selectable in the header;
  Argentina/Colombia share the same Spanish copy.

## Capabilities and Constraints

- Static Astro site, no backend/CMS. Forms are **UI only** in this version — no submission
  destination exists yet; the client hasn't decided where submitted data should go
  (`docs/decisions/0004-formularios-solo-ui-mvp.md`).
- Region/i18n is implemented as **mechanism only** so far: IP-edge detection (Vercel Edge
  Middleware, unverified until the first real deploy) + localStorage override + `/en` routing all
  work, but only the header/footer/nav and the Hero are translated to English — the rest of the
  site is still Spanish-only under `/en` (`docs/specs/010-i18n-region.md`).
- No real product photography yet. The client's photo archive (`mc-cargo-imagenes.zip`) hasn't
  been delivered — the live site today shows either an explicit "Foto pendiente" placeholder or
  stock/context photography that is clearly labeled as not being the actual product
  (`docs/credits/fotos-stock.md`).
- No official logo assets yet. Header/footer render a text placeholder; the brand guide explicitly
  forbids recreating the logo from scratch — real SVG/PNG must come from the client.
- The brand's H1 display font (Blippo-Black) isn't licensed yet — Righteous is a temporary
  stand-in, swappable from a single CSS variable (`--font-h1`).
- Semi-custom and "a molde"/custom measurement forms are currently blocked: the client's Google
  Forms return 401 (access restricted) and haven't been surveyed yet.

## Brand Commitments

Full detail: `docs/00-constitution.md`, `docs/brand/brand-guide.md`. Non-negotiable, not open to
redesign by this skill:

- Dark theme by default — `#111111` background, `#FFFFFF` primary text.
- `#00A0E3` turquoise is an accent only — CTAs, icons, dividers, short highlights. Never a
  dominant background, never in long paragraphs, max ~20% of any screen's surface.
- `#B0B0B0` light gray for secondary text / technical specs.
- Forbidden combinations: turquoise in long paragraphs; gray on turquoise; turquoise on light
  gray; light gray on white.
- Typography: H1 = Blippo-Black (temp stand-in: Righteous, `TODO` marked in code). H2 =
  Rajdhani-Black, always uppercase. Body/data = Poppins, Regular/Medium/SemiBold only.
- Tone: technical, honest, no empty superlatives, no artificial urgency ("¡última oportunidad!").
  Real technical data, never exaggerated. Slogan: RENDIMIENTO · CALIDAD · TÉCNICA.
- Logo: never recreate from scratch. Isotipo only for favicon. Minimum 120px digital width. No
  recoloring, deforming, rotating, or shadows.

## Evidence on Hand

- `docs/catalog/catalogo.json` — confirmed product specs/descriptions (source of truth). It flags
  its own known transcription errata; those are pending client confirmation, not silently "fixed."
- Sergio Mc Cargo's background (ex-national-team skater, world-championship medalist, mechanical
  technician specialized in carbon fiber/PRFC) — a confirmed brand fact from `brand-guide.md`, not
  third-party proof.
- **Nothing else exists yet and none of it should be fabricated:** no testimonials, no competition
  results citing MC Cargo boots, no press mentions, no athlete endorsements. All confirmed pending
  from the client.
- All product photography currently on the site is stock/placeholder, not real — see
  `docs/credits/fotos-stock.md`. Treat it as evidence of *layout*, never of the actual product.

## Product Principles

1. **Technical honesty over hype.** Real specs, no exaggerated claims, no artificial urgency —
   this is a brand-guide rule, not a style preference.
2. **The buyer already knows the sport.** Copy can be direct and technical; it doesn't need to
   explain speed skating fundamentals to a novice.
3. **WhatsApp-first conversion, not checkout.** Every path funnels to a WhatsApp conversation,
   regionalized to reduce friction for international buyers — there is no cart.
4. **Fit precision is the product's real differentiator.** Stock vs. semi-custom vs. custom, and
   exact-millimeter measurement forms, are core functionality, not an afterthought.
5. **Every placeholder says so.** Stock photos, the text-logo, mock contact data, and "no
   translation yet" banners are explicitly labeled as temporary — never presented as final.
