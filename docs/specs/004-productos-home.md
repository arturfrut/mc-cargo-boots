# 004 — Productos (sección home)

## Objetivo

Mostrar 3 productos destacados en la home como puerta de entrada al catálogo completo.

## Contenido / datos

- Fuente: `catalog/catalogo.json` → `modelos[]`.
- Se muestran 3 tarjetas (imagen `rol: "principal"`, nombre, línea, 1 línea de descripción corta,
  CTA "Ver más").
- Ancla de sección: `#productos` en la home. Click en "Ver más" (de cada tarjeta o de un CTA general
  "Ver todos los modelos") navega a la ruta real `/productos` (no es un cambio de estado in-page —
  ver ADR 0005).

## Reglas de marca aplicables

- Tarjetas sobre fondo oscuro, borde o divisor turquesa fino (acento, no relleno).
- Nombre del modelo en Poppins SemiBold; specs breves en Poppins Medium (gris claro).

## Abierto / pendiente

- **Qué 3 modelos mostrar**: el cliente dejó esto pendiente de decidir. Propuesta a validar: un
  modelo representativo por línea para mostrar variedad — Ultra Light+ (`ultra-light-plus`, tope de
  gama), Classic Stock (`classic-stock`, gama alta profesional) y Núcleo o F4 (gama media/iniciación)
  — en vez de mostrar 3 variantes de la misma línea Ultra Light.
