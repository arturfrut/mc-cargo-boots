# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository state — read this first

`main` currently serves only a placeholder "en construcción" page (`src/pages/index.astro` — static
HTML, no components, no i18n, no middleware). **The full implemented site (all Astro components,
`middleware.ts`, i18n routing, region detection, etc.) lives on the `site-full` branch**
(`origin/site-full`), not on `main`. `astro.config.mjs` on `main` is intentionally reduced to a bare
`defineConfig({})` to match.

Do not assume `src/components/`, `src/lib/`, `src/i18n/`, or `middleware.ts` exist on `main` — check
which branch you're on before referencing them. If a task is about restoring/continuing the real
site, work from `site-full` (or explicitly confirm with the user which branch is in scope) rather
than rebuilding against the placeholder.

`docs/` (specs, constitution, decisions, catalog) stays on `main` regardless of branch — it's the
spec-driven source of truth for both branches.

## Spec-driven workflow

This repo is spec-driven: implement/change a section only after its spec in `docs/specs/` exists and
is reasonably closed. If a scope/content question comes up during implementation that the spec
doesn't answer, update the spec first (or note it in the spec's "Abierto/pendiente" section) — don't
decide it silently in code.

- `docs/00-constitution.md` — non-negotiable rules (brand, product-data sourcing, stack/hosting,
  tone). Any spec or implementation decision conflicting with this is wrong; fix the spec, not this.
- `docs/brand/brand-guide.md` — brand guide (transcribed from the client PDF alongside it).
- `docs/catalog/catalogo.json` — single source of truth for product data (see below).
- `docs/specs/001…010` — one spec per site section, each with its own "Abierto/pendiente" section
  for what's blocked on the client. Spec→route map is in `DEVELOPMENT.md`.
- `docs/decisions/` — short ADRs on why Astro/Vercel/IP-edge-detection/View Transitions were chosen.
- `DEVELOPMENT.md` — the spec-driven workflow, spec→route map, current per-spec implementation
  status, and the not-yet-run guided setup for the client's separate GitHub/Vercel account.

**Read `docs/00-constitution.md` and the relevant `docs/specs/*.md` before implementing any
section.**

## Key technical decisions (full rationale in `docs/decisions/`)

- **Stack**: Astro — static HTML per route, i18n routing, View Transitions for SPA-like nav without
  losing SEO (chosen over a client-rendered SPA and over plain vanilla HTML/JS).
- **Hosting**: Vercel, on a new GitHub account (needed for edge geo-IP and future serverless
  functions — not viable on GitHub Pages).
- **Region detection** (on `site-full`): IP at the edge via `middleware.ts` (Vercel Edge Middleware,
  not an Astro SSR adapter — site stays static per ADR 0001). No permission prompt; manual override
  in `localStorage` always takes priority (resolved client-side in `src/lib/region.ts`). Drives the
  WhatsApp CTA copy and, when region is "Global", switches the site to English. As of the last
  implementation pass: mechanism + `/en` routing + Hero copy only — the rest of the content still
  needs translating.
- **Forms**: UI only, no backend destination yet — destination still undecided by the client.

## Product data

`docs/catalog/catalogo.json` is the single source of truth for product specs/descriptions — don't
hand-transcribe product content elsewhere. It flags its own transcription errata (see
`meta.notas_de_transcripcion` and the `nucleo` model's `anclaje_mm` note); treat those as pending
client confirmation, not something to silently "fix."

## Commands

`npm run dev`, `npm run build`, `npm run preview`, `npx astro check` (type-checks `.astro` files).
No test suite or linter configured. (On `main`'s placeholder these still work but there's little to
type-check; the full component tree is on `site-full`.)
