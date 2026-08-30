# 005 — Listado de productos (`/productos`)

## Objetivo

Catálogo completo: los 7 modelos de `catalog/catalogo.json`, navegables a su ficha de detalle.

## Contenido / datos

- Iterar `modelos[]` completo, agrupado visualmente por `linea` (Ultra Light, Classic, Núcleo, F4) o
  simplemente por `orden_catalogo` — a definir en implementación, ambas son válidas con estos datos.
- Cada tarjeta: imagen principal, nombre, `gama`, `tipo_ajuste` (stock/semi-custom, relevante porque
  determina qué formulario le corresponde — ver `007-formularios.md`), link a `/productos/{id}`.

## Reglas de marca aplicables

- Igual que `004-productos-home.md`: fondo oscuro, acentos turquesa cortos, sin turquesa de fondo.

## Abierto / pendiente

- Ninguno específico de esta spec — depende de que `006-producto-detalle.md` y las imágenes reales
  (hoy el catálogo referencia un `mc-cargo-imagenes.zip` que no está en este repo) estén disponibles.
