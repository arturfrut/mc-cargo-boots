// docs/specs/010-i18n-region.md — resolución de región/idioma.
//
// Corre 100% en el cliente (no hay adapter SSR, ver ADR 0001: el sitio sigue
// siendo HTML estático). La detección por IP en el edge (ADR 0003) la hace
// `middleware.ts` (Vercel Edge Middleware, fuera de `src/`) dejando una
// cookie de solo-lectura `mc-region-geo` como *hint* — nunca pisa la
// elección manual guardada en localStorage, que siempre tiene prioridad.
//
// Alcance de esta pasada (ver spec): solo `/` tiene equivalente en `/en`.
// El resto de las rutas todavía no está traducido, así que el redirect a
// inglés cae al home en vez de a un 404. Ampliar EN_AVAILABLE_PATHS a medida
// que se traduzcan más páginas.

import type { Region } from "./constants";
import { WHATSAPP_NUMBER } from "./constants";

export const REGION_STORAGE_KEY = "mc-region";
export const GEO_HINT_COOKIE = "mc-region-geo";

export type Locale = "es" | "en";

// Rutas (sin prefijo de locale) que ya tienen versión /en/... real.
export const EN_AVAILABLE_PATHS = new Set<string>(["/"]);

export function regionFromCountry(country: string | null | undefined): Region {
  if (country === "AR") return "AR";
  if (country === "CO") return "CO";
  return "GLOBAL";
}

export function localeForRegion(region: Region): Locale {
  // AR/CO comparten copy en español; cualquier otra región pasa a inglés
  // (docs/specs/010-i18n-region.md, punto 5).
  return region === "GLOBAL" ? "en" : "es";
}

function isRegion(value: string | null): value is Region {
  return value === "AR" || value === "CO" || value === "GLOBAL";
}

export function readStoredRegion(): Region | null {
  if (typeof localStorage === "undefined") return null;
  try {
    const value = localStorage.getItem(REGION_STORAGE_KEY);
    return isRegion(value) ? value : null;
  } catch {
    // localStorage puede tirar en navegación privada estricta — degradar
    // sin romper el resto de la página.
    return null;
  }
}

export function storeRegion(region: Region): void {
  if (typeof localStorage === "undefined") return;
  try {
    localStorage.setItem(REGION_STORAGE_KEY, region);
  } catch {
    // ignorar — sin persistencia, simplemente se vuelve a detectar la
    // próxima visita.
  }
}

export function readGeoHintCookie(): Region | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${GEO_HINT_COOKIE}=([^;]+)`));
  const value = match ? decodeURIComponent(match[1]) : null;
  return isRegion(value) ? value : null;
}

// Prioridad: elección manual (localStorage) > hint de geo-IP (cookie del
// edge middleware) > "GLOBAL" como default conservador.
export function resolveRegion(): Region {
  return readStoredRegion() ?? readGeoHintCookie() ?? "GLOBAL";
}

// Dado un pathname actual (puede o no tener prefijo /en) y una región
// destino, arma el pathname al que navegar. Si la ruta pedida no tiene
// versión en el locale destino todavía, cae al home de ese locale en vez de
// a un 404.
export function pathForRegion(currentPathname: string, region: Region): string {
  const targetLocale = localeForRegion(region);
  const stripped = currentPathname.startsWith("/en/")
    ? currentPathname.slice(3) || "/"
    : currentPathname === "/en"
      ? "/"
      : currentPathname;

  const hasTranslation = EN_AVAILABLE_PATHS.has(stripped);
  const destination = hasTranslation ? stripped : "/";

  if (targetLocale === "es") return destination;
  return destination === "/" ? "/en" : `/en${destination}`;
}

const WHATSAPP_REGION_SUFFIX: Record<Locale, Record<Region, string>> = {
  es: {
    AR: " Soy de Argentina.",
    CO: " Soy de Colombia.",
    // Spanish + Global es un caso borde (override manual sin cambiar de
    // idioma) — texto propio, no viene literal de la spec.
    GLOBAL: " Escribo desde otro país.",
  },
  en: {
    // La spec (010, punto 6) da literalmente "...from abroad" para inglés;
    // AR/CO en inglés son el mismo caso borde que GLOBAL en español.
    AR: " I'm from Argentina.",
    CO: " I'm from Colombia.",
    GLOBAL: " I'm writing from abroad.",
  },
};

export function whatsappHrefForRegion(baseMessage: string, locale: Locale, region: Region): string {
  const message = `${baseMessage}${WHATSAPP_REGION_SUFFIX[locale][region]}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
