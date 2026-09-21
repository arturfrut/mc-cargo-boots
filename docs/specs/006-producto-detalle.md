# 006 — Detalle de producto (`/productos/[slug]`)

## Objetivo

Ficha completa de un modelo, con los dos caminos de compra.

## Contenido / datos

- Fuente: `catalog/catalogo.json` → objeto `modelos[]` por `id` (slug).
- Mostrar: nombre, línea, gama, `descripcion`, `destacados[]`, specs técnicas (`suela`, `capellada`,
  `talles`, `anclaje_mm`), galería de `imagenes[]` (agrupada por `rol`: principal/galeria/detalle).
- **Selector de color**: grilla de ~30 swatches. Esta versión usa colores placeholder (no ligados a
  stock/inventario real) — ver Abierto/pendiente.
- **Dos caminos de compra**:
  1. **WhatsApp**: botón con mensaje autocompletado: *"Quiero preguntar por el modelo {nombre}, soy
     de {región}"* (región viene del selector de `010-i18n-region.md`; en inglés si el sitio está en
     modo Global).
  2. **Formulario**: botón "Completar formulario" que navega al formulario correspondiente según
     `tipo_ajuste` del modelo — ver mapeo en `007-formularios.md`.

## Reglas de marca aplicables

- Specs técnicas en Poppins Medium (gris claro), coherente con "datos técnicos reales sin
  exageraciones".
- Turquesa reservado a los 2 CTAs de compra y algún divisor — no como fondo de la ficha.

## Abierto / pendiente

- Mecanismo real de los ~30 colores (carga, nombres, disponibilidad por modelo) — para esta versión,
  usar swatches placeholder con nombres genéricos; se define el sistema real más adelante.
- Imágenes reales del catálogo dependen del `mc-cargo-imagenes.zip` mencionado en
  `catalog/catalogo.json` (no presente en este repo) — mientras tanto, usar imágenes genéricas de
  stock para maquetar.

## Revisión temporal: 3 propuestas de estilo

En la rama `revision-estilos-detalle` se agregó un selector de pestañas (`EstiloSwitcher.astro`)
arriba de la ficha, para que el dueño de la marca elija entre 3 tratamientos visuales del mismo
contenido/datos (mismo HTML, conmutado por `data-estilo` en `.detalle` — ver `[slug].astro`):

1. **Editorial** (default) — el diseño ya implementado: mucho whitespace, tono callado, CTA en fila
   al final.
2. **Ficha técnica** — foco en datos: specs/anclaje en cards con fondo de superficie, más arriba en
   el flujo, tratamiento más denso.
3. **Directo** — foco en conversión: H1 más grande, highlights como badges, barra de CTA `sticky`
   siempre visible.

Es un mecanismo **temporal**: una vez que el cliente elige, se borran las 2 variantes de CSS
descartadas y el `EstiloSwitcher`, y esta sección se saca de la spec — queda un único diseño, como
estaba pensado originalmente.

## Actualización 21/09/2026 (feedback del cliente)

- La ficha muestra el tiempo de entrega de su sistema sobre los botones y vuelve a la página del sistema.
- **Pendiente — colorear la botas** en semi-custom/custom (antes de los botones WhatsApp/formulario): el
  cliente lo pidió; se posterga. Falta arte de la bota por partes; la carta de colores real ya está
  relevada en los formularios (`ColorPickerField`, `COLOR_CODES`).
