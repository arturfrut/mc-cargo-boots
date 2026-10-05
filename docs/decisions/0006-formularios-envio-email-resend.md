# ADR 0006 — Formularios: envío de datos por email vía Resend

**Estado:** aceptado, implementado, **no activado** (falta que el cliente confirme el mail de
destino y, para producción, verificar un dominio propio en Resend). Supersede
[ADR 0004](0004-formularios-solo-ui-mvp.md).

## Contexto

ADR 0004 dejó los formularios sin backend porque el cliente no había definido a dónde debían
llegar los datos. Eso sigue sin definirse, pero conviene dejar la integración ya armada: cuando el
cliente pase el mail, activarla es solo cargar variables de entorno en Vercel — no hay que tocar
código de los formularios.

El volumen esperado es bajo (<50 envíos/mes), lo que entra cómodo en el plan free de Resend (hasta
3000 emails/mes, 100/día) sin costo.

## Decisión

- **Proveedor:** Resend, vía su API REST (`https://api.resend.com/emails`) llamada directo con
  `fetch` — sin el SDK `resend` (es node-oriented; evitamos la dependencia porque el endpoint corre
  en runtime edge y 3 líneas de fetch alcanzan).
- **Dónde corre:** `api/enviar-formulario.ts`, una Vercel Edge Function en la raíz del repo (mismo
  patrón que `middleware.ts` — plataforma de Vercel, independiente del modo de renderizado de
  Astro; el sitio sigue siendo HTML estático, ver ADR 0001).
- **Qué manda:** todos los campos de texto del formulario (nombre, medidas, dirección, etc.) en el
  cuerpo del email, más las fotos subidas como adjuntos.
- **Fotos:** se comprimen en el navegador antes de mandarse
  (`src/lib/formularios/comprimir-imagen.ts` — redimensiona a 1280px de lado más largo, recodifica
  a JPEG calidad 0.72) para no pegar contra los límites de la función serverless ni el límite de
  40MB por email de Resend. Si una foto puntual sigue siendo muy pesada después de comprimir, el
  endpoint la omite del envío (no lo hace fallar) y lo avisa en el email + en pantalla al cliente
  final, pidiéndole que la mande por WhatsApp.
- **Si el backend no está configurado** (sin `RESEND_API_KEY`/`FORM_DESTINATION_EMAIL` en Vercel):
  el endpoint responde 503 y el frontend no lo muestra como error — cae al comportamiento de ADR
  0004 (resumen en pantalla para guardar/reenviar a mano). El sitio nunca queda bloqueado por esto.
- **Variables de entorno** (ver `.env.example`): `RESEND_API_KEY`, `FORM_DESTINATION_EMAIL` (el mail
  del cliente, pendiente), `RESEND_FROM_EMAIL` (por ahora el remitente de pruebas de Resend).

## Alternativas descartadas

- **SDK oficial `resend`**: agrega una dependencia más para lo que termina siendo un `fetch` con
  headers — se descartó por simplicidad, no por incompatibilidad real (el SDK sí funciona en edge).
  Si en algún momento se necesitan features más avanzadas de la API (templates, batch), reconsiderar.
- **Función serverless Node en vez de Edge**: igual de válido; se eligió Edge por consistencia con
  `middleware.ts`, que ya usa ese runtime en este repo.
- **Guardar en un Sheet/CRM en vez de (o además de) email**: el cliente no pidió esto todavía — si
  lo pide más adelante, el endpoint ya aísla "recibir el formulario" de "qué hacer con los datos",
  así que agregar un segundo destino (ej. Google Sheets vía su API) no requiere tocar el frontend.

## Consecuencias

- **Pendiente de activar:** cargar `RESEND_API_KEY` y `FORM_DESTINATION_EMAIL` en Vercel apenas el
  cliente confirme el mail. Sin dominio propio verificado en Resend, confirmar también si el
  remitente de pruebas (`onboarding@resend.dev`) entrega correctamente al mail del cliente — Resend
  puede limitar la entrega a destinatarios arbitrarios sin un dominio verificado. Si hace falta,
  verificar `mccargoboots.com` (o el dominio que termine usando el sitio) en Resend (registros DNS).
- **No probado en runtime:** no hay cuenta de Resend todavía, así que esto no se corrió
  end-to-end contra un envío real. `astro dev` tampoco sirve para probar `/api` (ver nota abajo) —
  probarlo recién tiene sentido una vez deployado en Vercel con las env vars cargadas.
- Deja de ser necesario el aviso de "la carga de archivos no está conectada a ningún
  almacenamiento" en `FileField.astro` — se actualizó el copy.

## Nota: probar `/api` en local

`astro dev` no sirve funciones de `/api` (son de Vercel, no de Astro) — para probarlo en local hace
falta `vercel dev` (CLI de Vercel) con las env vars de `.env` cargadas, o un deploy preview en
Vercel. Mientras tanto, el fallback a 503 descripto arriba hace que el sitio funcione igual en
`astro dev` sin romper nada.
