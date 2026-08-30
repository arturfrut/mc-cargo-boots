# ADR 0004 — Formularios: solo UI en esta versión

**Estado:** aceptado (temporal, revisar cuando el cliente defina destino de datos)

## Contexto

El sitio necesita 3 formularios de toma de medidas (uno por `tipo_ajuste` de bota) más 2 formularios
opcionales de sobrehueso. El cliente todavía no decidió a dónde deben llegar esos datos (¿Sheet?
¿email? ¿CRM?).

## Decisión

Construir los formularios completos en el frontend (validación, campos, textos instructivos tomados
de `catalog/formularios-medidas.md`), pero **sin backend de destino** en esta versión — el envío no
persiste en ningún lado todavía (mock/no-op).

## Alternativas descartadas

- **Stub por email vía función serverless (Resend u otro)**: técnicamente más completo, pero se
  descartó para esta fase porque el cliente prefirió no atarse a una decisión de destino de datos
  todavía no tomada.

## Consecuencias

- Cuando el cliente defina el destino, se agrega un endpoint serverless en Vercel (ADR 0002 ya deja
  esa puerta abierta) sin tener que tocar el frontend de los formularios.
- Dos de los cuatro formularios originales del cliente están incompletos o inaccesibles (401) en el
  relevamiento (`catalog/formularios-medidas.md`, sección 4) — deben completarse con el cliente antes
  de dar la spec `specs/007-formularios.md` por cerrada para semi-custom y a molde/custom.
