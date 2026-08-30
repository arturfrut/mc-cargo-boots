// docs/decisions/0003-region-deteccion-ip-edge.md
// docs/specs/010-i18n-region.md
//
// Vercel Edge Middleware — vive en la raíz del repo (no en src/) a propósito:
// es una función de plataforma de Vercel, independiente del modo de
// renderizado de Astro (el sitio sigue siendo HTML estático, ver ADR 0001;
// no se agregó ningún adapter SSR para esto).
//
// Todo lo que hace es dejar el país detectado por geo-IP como una cookie de
// solo-lectura (`mc-region-geo`). La resolución real de la región — que
// siempre prioriza la elección manual guardada en localStorage por sobre
// este hint — vive en src/lib/region.ts y corre en el cliente, porque
// localStorage no es accesible desde el edge.
//
// ⚠️ No verificado en runtime: `geolocation()` solo devuelve un país real
// una vez deployado en Vercel (localhost siempre da `country: undefined`).
// Ver DEVELOPMENT.md — el deploy real todavía no se ejecutó.
import { geolocation, next } from "@vercel/edge";

const GEO_HINT_COOKIE = "mc-region-geo";

function regionFromCountry(country: string | undefined): "AR" | "CO" | "GLOBAL" {
  if (country === "AR") return "AR";
  if (country === "CO") return "CO";
  return "GLOBAL";
}

export default function middleware(request: Request) {
  // Ya hay un hint guardado en esta sesión de navegación — no lo pisamos en
  // cada request, alcanza con setearlo una vez.
  const cookieHeader = request.headers.get("cookie") ?? "";
  if (new RegExp(`(?:^|;\\s*)${GEO_HINT_COOKIE}=`).test(cookieHeader)) {
    return next();
  }

  const { country } = geolocation(request);
  const region = regionFromCountry(country);

  const response = next();
  response.headers.append(
    "set-cookie",
    `${GEO_HINT_COOKIE}=${region}; Path=/; Max-Age=31536000; SameSite=Lax`,
  );
  return response;
}

// No corre sobre assets estáticos — no tiene sentido detectar región para
// imágenes/CSS/JS, y evita gastar invocaciones de más.
export const config = {
  matcher: "/((?!_astro/|favicon.svg).*)",
};
