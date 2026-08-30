// docs/specs/010-i18n-region.md — diccionario de i18n.
//
// Alcance de esta pasada: solo el "chrome" del sitio (header/footer/nav) y el
// Hero, para poder probar el mecanismo de ruteo /en/... end-to-end con una
// página real. El resto de las secciones (Nosotros, Productos, Contacto,
// Technical Gallery, fichas de producto) sigue en español incluso dentro de
// /en por ahora — traducirlas es trabajo de contenido pendiente, no del
// mecanismo. Ver nota en DEVELOPMENT.md / spec 010.

export const LOCALES = ["es", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "es";

type NavKey = "nosotros" | "productos" | "contacto" | "galeria";

const NAV_LABELS: Record<Locale, Record<NavKey, string>> = {
  es: {
    nosotros: "Nosotros",
    productos: "Productos",
    contacto: "Contacto",
    galeria: "Technical Gallery",
  },
  en: {
    nosotros: "About us",
    productos: "Products",
    contacto: "Contact",
    galeria: "Technical Gallery",
  },
};

// path relativo a la raíz del locale (sin prefijo /en) — se resuelve con
// getRelativeLocaleUrl en cada componente.
export const NAV_ITEMS_BY_LOCALE: Record<Locale, { key: NavKey; href: string }[]> = {
  es: [
    { key: "nosotros", href: "/#nosotros" },
    { key: "productos", href: "/#productos" },
    { key: "contacto", href: "/#contacto" },
    { key: "galeria", href: "/#technical-gallery" },
  ],
  en: [
    { key: "nosotros", href: "/#nosotros" },
    { key: "productos", href: "/#productos" },
    { key: "contacto", href: "/#contacto" },
    { key: "galeria", href: "/#technical-gallery" },
  ],
};

export function navLabel(locale: Locale, key: NavKey): string {
  return NAV_LABELS[locale][key];
}

export const UI_STRINGS: Record<Locale, Record<string, string>> = {
  es: {
    "whatsapp.cta.aria": "Escribir por WhatsApp",
    "logo.aria": "MC Cargo Boots — inicio",
    "footer.tagline": "RENDIMIENTO · CALIDAD · TÉCNICA",
    "hero.tagline": "Rendimiento · Calidad · Técnica",
    "hero.copy":
      "Botas de alta competición para patín carrera, hechas a mano en Argentina desde 1990.",
    "hero.cta": "Escribinos por WhatsApp",
  },
  en: {
    "whatsapp.cta.aria": "Message us on WhatsApp",
    "logo.aria": "MC Cargo Boots — home",
    "footer.tagline": "PERFORMANCE · QUALITY · TECHNIQUE",
    "hero.tagline": "Performance · Quality · Technique",
    "hero.copy":
      "High-competition speed skating boots, handmade in Argentina since 1990.",
    "hero.cta": "Message us on WhatsApp",
  },
};

export function t(locale: Locale, key: string): string {
  return UI_STRINGS[locale][key] ?? UI_STRINGS[DEFAULT_LOCALE][key] ?? key;
}

export function isLocale(value: string | undefined): value is Locale {
  return value === "es" || value === "en";
}
