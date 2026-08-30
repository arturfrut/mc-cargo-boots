# 007 — Formularios de toma de medidas

## Objetivo

Réplica web de los formularios de Google Forms del cliente, uno por tipo de bota, más dos opcionales
de sobrehueso. Ver ADR 0004: en esta versión, solo UI, sin backend de destino.

## Contenido / datos

Fuente: `catalog/formularios-medidas.md`. Mapeo `tipo_ajuste` del modelo comprado → formulario:

| `tipo_ajuste` en catálogo | Formulario | Estado del relevamiento |
|---|---|---|
| `stock` | Estándar | ✅ pero **solo página 1** — el original es multipágina, falta relevar el resto |
| `semi-custom` | Semi-custom | ❌ 401 (acceso restringido) — pendiente de destrabar con el cliente |
| (no presente aún en catálogo) | A molde / custom | ❌ 401 (acceso restringido) — ídem |

Además, dos formularios **opcionales** (no ligados a `tipo_ajuste`, se ofrecen aparte si el
comprador indica tener esa condición del pie):
- Sobrehueso calcáneo (talón) — ✅ relevado completo.
- Sobrehueso escafoides — ✅ relevado completo.

Campos, textos instructivos y validaciones: replicar literalmente lo documentado en
`catalog/formularios-medidas.md` (incluye las indicaciones de "cómo medir" con sus fotos explicativas
— reemplazar las fotos de Google Forms, que expiran, por versiones propias pedidas al cliente).

## Reglas de marca aplicables

- Campos de medida: `input type="number"` con sufijo "mm", validación de rango razonable (ver
  recomendación en la fuente, ~180-330mm de largo), manteniendo el texto de ayuda "medida exacta, sin
  agregar ni quitar milímetros".
- "Sexo", "Uso", "Contextura del pie": radio buttons con las opciones exactas del original.
- Tono de los textos instructivos: literal al original (técnico y directo).

## Abierto / pendiente

- **Bloqueante para semi-custom y a molde/custom**: pedirle al cliente que en Google Forms desactive
  "Restringir a usuarios de [organización]" y/o "Limitar a 1 respuesta" en esos dos formularios para
  poder relevarlos completos (ver `catalog/formularios-medidas.md` §4).
- Relevar la(s) página(s) 2+ del formulario Estándar.
- Destino final de los datos enviados (ADR 0004).
- Fuente de fotos genéricas para reemplazar las instructivas del original.
