# DEVELOPMENT.mdEsme gust

Guía de desarrollo para el sitio de MC Cargo Boots.

## Flujo spec-driven

Este proyecto se desarrolla spec-first: **antes de implementar una sección o feature, su spec en
`docs/specs/` tiene que existir y estar razonablemente cerrada.** El código no es la fuente de verdad
del *qué* hay que construir — las specs sí. Si al implementar aparece una duda de alcance/contenido
que la spec no responde, se actualiza la spec primero (o se anota en su sección "Abierto/pendiente"),
no se decide solo en el código.

Reglas no negociables (marca, datos de producto, stack) están en `docs/00-constitution.md` — no se
repiten por spec, cualquier spec que las contradiga está mal.

Las decisiones técnicas de fondo (por qué Astro, por qué Vercel, etc.) están en `docs/decisions/`
como ADRs cortos — consultarlos antes de proponer cambiar de stack o hosting.

## Mapa specs → rutas del sitio (a implementar)

| Spec | Ruta |
|---|---|
| `specs/001-layout-shell.md` | header/footer/nav en todas las páginas |
| `specs/002-hero.md` | `/` (sección hero) |
| `specs/003-nosotros.md` | `/` (sección nosotros) |
| `specs/004-productos-home.md` | `/` (sección `#productos`, 3 destacados) |
| `specs/005-productos-listado.md` | `/productos` |
| `specs/006-producto-detalle.md` | `/productos/[slug]` |
| `specs/007-formularios.md` | `/formulario/[tipo]` |
| `specs/008-contacto.md` | `/` (sección contacto) |
| `specs/009-galeria-tecnica.md` | `/` (sección technical gallery) |
| `specs/010-i18n-region.md` | transversal a todas las rutas |

Todas las rutas se duplican bajo `/en/...` cuando la región es Global (ver `specs/010-i18n-region.md`).

## Estado actual del proyecto

Proyecto Astro scaffoldeado y con la mayoría de las specs implementadas (estado al 30/08/2026):

- ✅ Implementadas: `001-layout-shell`, `002-hero`, `003-nosotros`, `004-productos-home`,
  `005-productos-listado`, `006-producto-detalle`, `008-contacto`, `009-galeria-tecnica`,
  `010-i18n-region` (solo el mecanismo — ver su sección "Estado de implementación": falta traducir
  el contenido a `/en/...` más allá del Hero).
- ⏭️ Saltada por ahora, a pedido del cliente: `007-formularios` (hay relevamiento suficiente para
  Estándar/sobrehueso calcáneo/escafoides; Semi-custom y A-molde siguen bloqueados con 401).

Varias specs tienen puntos **bloqueantes de contenido** marcados en su sección "Abierto/pendiente"
(fotos, mail de contacto, videos de YouTube, formularios con 401) — conviene resolverlos con el
cliente en paralelo a la implementación, no esperan a terminarla.

`npm run dev` / `npm run build` / `npx astro check` ya funcionan (ver `package.json`).

## Pasada de calidad visual con Impeccable (resuelta, 30/08/2026)

`main` pasó por el plugin [Impeccable](https://impeccable.style/) (`pbakaus/impeccable`) en una
rama aparte (`impecable-version`, mergeada a `main` por fast-forward el 30/08/2026 — el historial
de commits de esa pasada queda visible en `git log`). Contexto documentado en `PRODUCT.md`,
`DESIGN.md` y `.impeccable/design.json`. El rework partió siempre de `docs/00-constitution.md` y
`docs/brand/brand-guide.md` como reglas no negociables — Impeccable pulió dentro de esas reglas
(auditoría → performance, accesibilidad, consistencia de tokens de color), no las reemplazó. No
tocó contenido, catálogo, ni las specs.

La rama `impecable-version` sigue existiendo apuntando al mismo commit que `main` — se puede borrar
cuando se confirme que no hace falta como referencia (`git branch -d impecable-version`).

## Apéndice — Setup guiado de cuenta separada (GitHub + Vercel + MCP)

No ejecutar esto todavía — son pasos interactivos (requieren login) para cuando el cliente esté listo
a subir el proyecto real:

1. `gh auth login` (o `gh auth switch` si ya hay otra sesión de `gh` activa en esta máquina) para
   autenticar la cuenta de GitHub personal nueva que ya está creada.
2. Crear el repo remoto bajo esa cuenta: `gh repo create <nombre> --private --source=. --remote=origin`
   (o el nombre/visibilidad que se prefiera) y pushear.
3. Crear o iniciar sesión en una cuenta de Vercel usando "Continue with GitHub" con esa misma cuenta
   nueva — mantiene el plan Hobby gratuito separado de otros proyectos existentes en Vercel.
4. Importar el repo desde el dashboard de Vercel (o `vercel link` desde la CLI) — a partir de ahí,
   cada push a `main` dispara un deploy de producción y cada PR un preview deploy.
5. Agregar los MCP servers de GitHub y Vercel apuntando a esta cuenta nueva, para poder operar el
   repo/deploys desde Claude Code en sesiones futuras.
