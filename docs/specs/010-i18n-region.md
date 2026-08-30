# 010 — Región e idioma

## Objetivo

Selector de región (Argentina / Colombia / Global) con detección automática de baja fricción, que
personaliza el mensaje de WhatsApp y, en el caso de Global, cambia el idioma de todo el sitio a inglés.

## Comportamiento

1. En el primer request, Vercel expone el país detectado por IP en el edge (ver ADR 0003).
2. Se mapea: `AR` → Argentina, `CO` → Colombia, cualquier otro país → Global.
3. Si hay una elección manual guardada en `localStorage`, esa tiene prioridad sobre la detección.
4. El usuario puede cambiar la región en cualquier momento desde el selector del header
   (`001-layout-shell.md`) — bandera visible o dentro del menú hamburguesa.
5. Región = Global ⟶ el sitio entero pasa a inglés (rutas `/en/...`, vía i18n routing de Astro).
   Argentina/Colombia comparten el mismo copy en español (no hay variación de "vos" vs "tú" prevista
   en esta versión).
6. La región elegida se interpola en los mensajes de WhatsApp de `002-hero.md`, `006-producto-detalle.md`
   y `008-contacto.md` (ej. "...soy de Argentina" / "...soy de Colombia" / "...from abroad" en inglés).

## Reglas de marca aplicables

- El selector no debe competir visualmente con el CTA turquesa principal — usar íconos/banderas
  discretos, sin fondo turquesa.

## Estado de implementación

**Implementado (30/08/2026) — solo el mecanismo, no todo el contenido.** Decisión explícita del
cliente: separar "que el ruteo/detección de región funcione" de "traducir todo el sitio", para no
bloquear lo primero en lo segundo.

- Selector fijo en el header (banderas visibles, no colapsado en el menú hamburguesa) — resuelve el
  punto abierto anterior de `001-layout-shell.md`.
- `middleware.ts` (raíz del repo, Vercel Edge Middleware — no un adapter SSR, el sitio sigue siendo
  HTML estático per ADR 0001) usa `geolocation()` de `@vercel/edge` para dejar el país como cookie
  `mc-region-geo` de solo lectura. **No verificado en runtime real** — `geolocation()` solo devuelve
  país en Vercel; en local siempre da `undefined`/Global. Se prueba recién con el primer deploy
  (ver `DEVELOPMENT.md`, todavía no ejecutado).
- Resolución de región 100% client-side en `src/lib/region.ts`: `localStorage` (`mc-region`) >
  hint de la cookie de geo-IP > `"GLOBAL"` por defecto. El componente `RegionSelector.astro` la
  usa para: sincronizar la bandera mostrada, reescribir el `href` de todo link marcado
  `data-whatsapp-msg` con el sufijo de región (punto 6), y navegar entre `/` ⇄ `/en` cuando la
  región implica un cambio de idioma.
- i18n routing de Astro configurado (`astro.config.mjs`, `defaultLocale: "es"` sin prefijo,
  `en` bajo `/en/...`).
- **Traducción de contenido — solo el "chrome" (header/footer/nav) y el Hero están en inglés**
  (`src/i18n/ui.ts`). `src/pages/en/index.astro` es la única ruta `/en` que existe hoy; reusa
  Nosotros/Productos/Contacto/Technical Gallery tal cual (en español) con un aviso visible de
  "todavía no traducido". El resto de las páginas (`/productos`, fichas de producto) no tiene
  versión `/en` — si la región elegida implica inglés en una ruta sin traducir, se cae al home de
  ese idioma en vez de a un 404 (ver `pathForRegion` en `src/lib/region.ts`).

## Abierto / pendiente

- Traducir el resto del contenido a inglés (Nosotros, Productos — listado y fichas, Contacto,
  Technical Gallery) y darles ruta `/en/...` real — trabajo de contenido, no de mecanismo.
- Verificar la detección de geo-IP con un deploy real en Vercel (bloqueado hasta ejecutar el setup
  guiado de `DEVELOPMENT.md`).
- Confirmar con el cliente el texto en español para el caso borde "región Global sin cambiar de
  idioma" (override manual) — hoy usa un texto propio no tomado de ningún documento fuente
  (`" Escribo desde otro país."` en `src/lib/region.ts`).
