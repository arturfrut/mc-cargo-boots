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
