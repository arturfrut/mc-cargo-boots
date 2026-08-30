# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository state

Astro project scaffolded, most specs implemented — see `DEVELOPMENT.md` for the current
implementation status (spec-by-spec) and the spec→route map, and `docs/` for the specs themselves.
This repo is still **spec-driven**: implement/change a section only after its spec in `docs/specs/`
exists and is reasonably closed.

Commands: `npm run dev`, `npm run build`, `npm run preview`, `npx astro check` (type-checks `.astro`
files). No test suite or linter configured yet.

## Where things live

- `docs/00-constitution.md` — non-negotiable rules (brand, product-data sourcing, stack/hosting, tone).
- `docs/brand/` — brand guide (`brand-guide.md`) and the original client PDF it's transcribed from
  (`manual-de-marca.pdf`).
- `docs/catalog/` — product catalog (`catalogo.json`, the single source of truth for product data)
  and the measurement-forms spec (`formularios-medidas.md`).
- `docs/specs/` — one spec per site section/feature (hero, nosotros, productos, formularios,
  contacto, technical gallery, i18n/región...), each with an "Abierto/pendiente" section for what's
  still undecided or blocked on the client.
- `docs/decisions/` — ADRs explaining why Astro/Vercel/IP-edge-detection/etc. were chosen over
  alternatives.
- `DEVELOPMENT.md` — the spec-driven workflow itself, plus the spec→route map and the guided setup
  for the client's separate GitHub/Vercel account (not yet executed).

**Read `docs/00-constitution.md` and the relevant `docs/specs/*.md` before implementing any section —
that's the actual spec, not this file.**

## Key technical decisions already made (see `docs/decisions/` for full rationale)

- **Stack**: Astro (static HTML per route, i18n routing, View Transitions for SPA-like nav without
  losing SEO — chosen specifically over a client-rendered SPA and over plain vanilla HTML/JS).
- **Hosting**: Vercel, on a new GitHub account (needed for edge geo-IP and future serverless
  functions — not viable on GitHub Pages, which is pure static).
- **Region detection**: IP at the edge (`middleware.ts` at repo root — Vercel Edge Middleware, not
  an Astro SSR adapter, site stays static per ADR 0001), no permission prompt; manual override
  persisted in `localStorage` always takes priority (resolved client-side in `src/lib/region.ts`).
  Drives the WhatsApp CTA copy and, when region is "Global", switches the whole site to English.
  Implemented so far: the mechanism + `/en` routing + Hero copy only — translating the rest of the
  content is separate, pending work (see `docs/specs/010-i18n-region.md`).
- **Forms**: UI only in this first version, no backend destination yet (destination still undecided
  by the client) — see `docs/decisions/0004-formularios-solo-ui-mvp.md`.

## Product data

`docs/catalog/catalogo.json` is the single source of truth for product specs/descriptions — don't
hand-transcribe product content elsewhere. It flags its own transcription errata (see
`meta.notas_de_transcripcion` and the `nucleo` model's `anclaje_mm` note); treat those as pending
client confirmation, not something to silently "fix."
