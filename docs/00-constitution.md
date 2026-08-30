# Constitution — MC Cargo Boots web

Reglas no negociables del proyecto. Cualquier spec en `specs/` o decisión de implementación que
entre en conflicto con esto está mal — se corrige la spec, no esta página.

## Marca (fuente completa: `brand/brand-guide.md`)

- Dark theme por defecto: fondo `#111111`, texto principal `#FFFFFF`.
- Turquesa `#00A0E3` es acento exclusivamente — íconos, CTAs, divisores, destacados cortos. Nunca
  fondo dominante, nunca en párrafos, máx. ~20% de superficie de cualquier pantalla.
- Combinaciones prohibidas: turquesa en párrafos largos, gris sobre turquesa, turquesa sobre gris
  claro, gris claro sobre blanco.
- Tipografía: H1 = Blippo-Black (stand-in temporal: **Righteous**, marcado con `TODO` en el código
  hasta tener la fuente licenciada, swapeable desde una sola variable CSS). H2 = Rajdhani-Black,
  siempre en mayúsculas. Body/datos = Poppins (Regular/Medium/SemiBold únicamente).
- Logo: nunca recrear desde cero — assets oficiales (SVG/PNG) se piden al cliente. Isotipo para
  favicon/avatares. Mínimo 120px de ancho digital. Sin recolorear, deformar, rotar ni aplicar sombras.
- Tono de copy: técnico, honesto, sin superlativos vacíos ni urgencias artificiales ("¡última
  oportunidad!"). Datos técnicos reales, sin exagerar.

## Datos de producto

- `catalog/catalogo.json` es la única fuente de verdad para specs/descripciones de producto. No se
  reescribe a mano en el código ni en las specs — se referencia o se itera sobre el archivo.
- Las notas de errata marcadas en el propio JSON (`meta.notas_de_transcripcion`, nota del modelo
  `nucleo`) se tratan como pendientes de confirmar con el cliente, no se "corrigen" en silencio.

## Stack y hosting (detalle completo: `decisions/`)

- Astro como framework. Vercel como hosting, sobre una cuenta de GitHub nueva del cliente.
- Detección de región por IP en el edge, sin pedir permisos al usuario; override manual siempre visible.
- Formularios: en esta primera versión, solo UI — sin backend de destino todavía.

## Idiomas

- Español (Argentina/Colombia comparten copy) por defecto; inglés completo (`/en/...`) cuando la
  región es "Global" o el usuario lo elige manualmente.
