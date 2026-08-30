// Datos compartidos entre el layout shell y las secciones que lo consumen
// (hero, contacto, producto-detalle). Ver docs/specs/001-layout-shell.md,
// docs/specs/002-hero.md, docs/specs/008-contacto.md.

// TODO: reemplazar por el número real de WhatsApp del cliente antes de publicar
// (mock explícitamente autorizado por docs/specs/008-contacto.md).
export const WHATSAPP_NUMBER = "5491100000000";

// Mensajes base por idioma (sin el sufijo de región — eso lo agrega
// docs/lib/region.ts en el cliente una vez resuelta la región, ver
// docs/specs/010-i18n-region.md punto 6). El resto de las páginas sigue en
// español únicamente; "en" se usa hoy solo en /en (Hero).
export const WHATSAPP_GENERIC_MESSAGE: Record<"es" | "en", string> = {
  es: "Hola, quiero más información sobre MC Cargo Boots.",
  en: "Hi, I'd like more information about MC Cargo Boots.",
};

export function whatsappHref(message = WHATSAPP_GENERIC_MESSAGE.es): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// El sufijo de región ("...soy de Argentina/Colombia" / "...from abroad")
// se agrega client-side una vez resuelta la región — ver
// src/lib/region.ts#whatsappHrefForRegion y el script de RegionSelector.astro,
// que reescribe el href de cualquier link marcado con `data-whatsapp-msg`.
export function whatsappProductHref(nombreModelo: string): string {
  return whatsappHref(`Hola, quiero preguntar por el modelo ${nombreModelo}.`);
}

export function whatsappProductMessage(nombreModelo: string): string {
  return `Hola, quiero preguntar por el modelo ${nombreModelo}.`;
}

// TODO: reemplazar por el mail real del cliente antes de publicar (pendiente,
// no está en ningún documento fuente todavía — ver docs/specs/008-contacto.md).
export const CONTACT_EMAIL = "contacto@marketingkai.ok";

// Reales, ya confirmados en docs/catalog/catalogo.json → meta.redes_sociales.
export const INSTAGRAM_HANDLE = "mccargoboots";
export const FACEBOOK_HANDLE = "mccargoboots";

// NAV_ITEMS se movió a src/i18n/ui.ts (NAV_ITEMS_BY_LOCALE) para poder tener
// labels/hrefs por idioma — ver docs/specs/010-i18n-region.md.

// Mapeo tipo_ajuste (catalogo.json) → ruta del formulario correspondiente.
// docs/specs/007-formularios.md, todavía no implementada — el link queda
// apuntando a la ruta real (404 hasta que exista), mismo criterio que
// /productos antes de 005-productos-listado.md.
export const FORMULARIO_HREF_BY_TIPO_AJUSTE: Record<string, string> = {
  stock: "/formulario/estandar",
  "semi-custom": "/formulario/semi-custom",
};

// Fotos de stock temporales (Wikimedia Commons, uso libre con atribución) —
// ninguna es de MC Cargo. Detalle completo de fuente/autor/licencia en
// docs/credits/fotos-stock.md. Reemplazar por material real del cliente
// (ver "Abierto/pendiente" de 002-hero.md, 003-nosotros.md, 004-productos-home.md).
export type StockCredit = { author: string; license: string };

export const STOCK_CREDITS: Record<string, StockCredit> = {
  "hero-youth-olympics-buenosaires": { author: "Marcus Cyron", license: "CC BY-SA 3.0" },
  "nosotros-berlin-marathon": { author: "Thomas Angermann", license: "CC BY-SA 2.0" },
  "nosotros-berlin-2017": { author: "Gnangarra", license: "CC BY 2.5 AU" },
  "nosotros-ludwigsfelde-2005": { author: "Trash:Pet", license: "CC BY-SA 3.0" },
  "nosotros-boys-final-42": { author: "Marcus Cyron", license: "CC BY-SA 3.0" },
  "producto-girls-semifinal-43": { author: "Marcus Cyron", license: "CC BY-SA 3.0" },
  "producto-girls-029": { author: "Marcus Cyron", license: "CC BY-SA 3.0" },
  "producto-boys-victory-71": { author: "Marcus Cyron", license: "CC BY-SA 3.0" },
};

export function stockCreditLabel(key: string): string {
  const credit = STOCK_CREDITS[key];
  if (!credit) return "";
  return `Foto: ${credit.author} / ${credit.license}`;
}

export type Region = "AR" | "CO" | "GLOBAL";

export type RegionOption = { code: Region; label: string; flag: string };

// UI únicamente en esta spec (001) — detección por IP/edge, localStorage y el
// cambio de idioma a inglés para "Global" son comportamiento de
// docs/specs/010-i18n-region.md, todavía no implementado.
export const REGION_OPTIONS: RegionOption[] = [
  { code: "AR", label: "Argentina", flag: "🇦🇷" },
  { code: "CO", label: "Colombia", flag: "🇨🇴" },
  { code: "GLOBAL", label: "Global", flag: "🌐" },
];
