# ADR 0001 — Stack: Astro

**Estado:** aceptado

## Contexto

El sitio necesita ~22 páginas (home + `/productos` + ~7 fichas de producto + 3 formularios, todo
×2 idiomas) que comparten header, footer, nav y selector de región/idioma. Prioridad declarada del
cliente: velocidad de carga y SEO. Dudaba entre vanilla HTML/JS (por SEO) y React (por comodidad de
componentes, pero con peor SEO out-of-the-box).

## Decisión

Usar **Astro**: genera HTML estático por ruta (mismo perfil de SEO/velocidad que vanilla puro), pero
permite componentizar header/footer/nav/selector una sola vez y reusarlos en todas las páginas, tiene
i18n routing nativo, y soporta View Transitions para navegación fluida sin pagar el costo de una SPA
client-rendered. No envía JS de framework al cliente salvo que se pida explícitamente (islands).

## Alternativas descartadas

- **Vanilla HTML/CSS/JS sin build**: mismo SEO, pero header/footer/selector se duplican a mano en
  ~22 archivos × 2 idiomas — alto riesgo de desincronización a medida que el sitio crece.
- **React/Next.js SPA**: buena DX pero el cliente explícitamente marcó el riesgo de SEO de React
  como motivo para evitarlo; Next con SSR lo resolvería pero es más pesado que lo que el proyecto necesita.

## Consecuencias

- Se necesita Node/npm para build local y en Vercel (no es "abrir un HTML y listo").
- Sintaxis `.astro` nueva a aprender, pero es HTML + frontmatter JS, bajo costo de entrada.
