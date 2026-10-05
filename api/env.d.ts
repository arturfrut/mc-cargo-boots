// Tipo mínimo para `process.env` en las Vercel Edge Functions de /api — evita
// agregar @types/node (Node completo) solo para esto. Vercel expone
// `process.env` en runtime edge específicamente para leer env vars.
declare const process: { env: Record<string, string | undefined> };
