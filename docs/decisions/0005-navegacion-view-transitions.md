# ADR 0005 — Navegación: multi-página + View Transitions

**Estado:** aceptado

## Contexto

El cliente no había decidido entre una SPA completa (todo en `/`, salvo formularios y detalle de
producto) o navegación tradicional multi-página, buscando la sensación fluida de una SPA sin perder
SEO.

## Decisión

Cada sección/página es una ruta real con su propio HTML (`/`, `/productos`, `/productos/[slug]`,
`/formulario/[tipo]`) — nada de routing client-side. Se usa la **View Transitions API** de Astro
para que la navegación entre esas rutas se sienta fluida (sin parpadeo de recarga completa),
consiguiendo el efecto que se buscaba de una SPA sin su costo de SEO.

## Alternativas descartadas

- **SPA completa (client-side routing)**: sensación de app, pero peor SEO/LCP salvo que se sume SSR
  (ya no es "liviano"); descartada porque el cliente priorizó explícitamente SEO y velocidad.

## Consecuencias

- El ancla `#productos` en home hace scroll a la sección de destacados; el link "ver más" navega a
  la ruta real `/productos` (no es un cambio de estado dentro de la misma página).
