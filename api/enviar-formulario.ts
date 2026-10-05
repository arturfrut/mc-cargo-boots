// docs/decisions/0006-formularios-envio-email-resend.md
//
// Vercel Edge Function — vive en /api (raíz del repo, al lado de
// middleware.ts) a propósito: igual que la geo-IP, es una función de
// plataforma de Vercel independiente del modo de renderizado de Astro (el
// sitio sigue siendo HTML estático, ver ADR 0001 — no hace falta adapter SSR
// para esto, ver ADR 0004/0006).
//
// Usa la API REST de Resend directo por fetch (sin el SDK "resend") para no
// agregar una dependencia node-oriented a un runtime edge — son 3 líneas de
// fetch, no hace falta más.
//
// ⚠️ No probado en runtime todavía: faltan RESEND_API_KEY y
// FORM_DESTINATION_EMAIL (el cliente todavía no definió a qué mail llegan
// los formularios). Sin esas env vars configuradas en Vercel, este endpoint
// responde 503 — el frontend (formulario-wizard.ts) lo toma como "backend
// todavía no activado" y cae al resumen en pantalla de toda la vida (no
// bloquea al usuario). Ver .env.example.

export const config = { runtime: "edge" };

interface ArchivoAdjunto {
  nombre: string;
  tipo: string;
  base64: string;
}

interface PayloadFormulario {
  formulario: string;
  campos: Record<string, string>;
  archivos?: ArchivoAdjunto[];
}

const MAX_ADJUNTOS_BYTES = 35 * 1024 * 1024; // margen bajo el límite de 40MB de Resend por email.

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const destino = process.env.FORM_DESTINATION_EMAIL;
  const remitente = process.env.RESEND_FROM_EMAIL || "MC Cargo Boots <onboarding@resend.dev>";

  if (!apiKey || !destino) {
    return new Response(
      JSON.stringify({ error: "Envío por email todavía no configurado (faltan env vars en Vercel)." }),
      { status: 503, headers: { "content-type": "application/json" } },
    );
  }

  let payload: PayloadFormulario;
  try {
    payload = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "JSON inválido" }), { status: 400 });
  }

  if (!payload.formulario || !payload.campos) {
    return new Response(JSON.stringify({ error: "Payload incompleto" }), { status: 400 });
  }

  const archivos = payload.archivos ?? [];
  const pesoAdjuntos = archivos.reduce((acc, a) => acc + a.base64.length * 0.75, 0);
  const archivosIncluidos = pesoAdjuntos <= MAX_ADJUNTOS_BYTES ? archivos : [];
  const archivosOmitidos = archivosIncluidos.length === archivos.length ? [] : archivos.map((a) => a.nombre);

  const filas = Object.entries(payload.campos)
    .filter(([, v]) => v && v.trim() !== "")
    .map(([k, v]) => `<tr><td style="padding:4px 10px 4px 0;color:#667;vertical-align:top;white-space:nowrap">${escapeHtml(k)}</td><td style="padding:4px 0">${escapeHtml(v)}</td></tr>`)
    .join("");

  const notaOmitidos =
    archivosOmitidos.length > 0
      ? `<p style="color:#a00">No se pudieron adjuntar (superaban el límite de tamaño): ${archivosOmitidos.map(escapeHtml).join(", ")}. Pedir las fotos directo al cliente por WhatsApp.</p>`
      : "";

  const html = `
    <h2>${escapeHtml(payload.formulario)}</h2>
    <table>${filas}</table>
    ${notaOmitidos}
  `;

  const texto = Object.entries(payload.campos)
    .filter(([, v]) => v && v.trim() !== "")
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${apiKey}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from: remitente,
      to: destino,
      subject: `${payload.formulario} — nuevo envío`,
      html,
      text: texto,
      attachments: archivosIncluidos.map((a) => ({
        filename: a.nombre,
        content: a.base64,
      })),
    }),
  });

  if (!res.ok) {
    const detalle = await res.text();
    return new Response(JSON.stringify({ error: "Resend rechazó el envío", detalle }), {
      status: 502,
      headers: { "content-type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ ok: true, adjuntosOmitidos: archivosOmitidos }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}
