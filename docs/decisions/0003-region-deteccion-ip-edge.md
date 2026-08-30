# ADR 0003 — Detección de región: IP en el edge

**Estado:** aceptado

## Contexto

El sitio debe preseleccionar Argentina / Colombia / Global (bandera + idioma) para personalizar
sobre todo el mensaje de WhatsApp ("soy de Argentina/Colombia"). El cliente pidió la forma "menos
molesta" para el usuario, dudando entre IP y geolocalización del navegador.

## Decisión

Detectar el país por **IP en el edge de Vercel** (`geo.country` disponible antes del primer render),
sin pedir permiso al usuario. Se preselecciona bandera/idioma en base a eso. El usuario puede
cambiarlo en cualquier momento desde un selector siempre visible (esquina o menú hamburguesa); la
elección manual se guarda en `localStorage` y tiene prioridad sobre la detección en visitas futuras.

## Alternativas descartadas

- **Geolocalización del navegador (GPS/wifi)**: más precisa, pero requiere un permiso explícito que
  el usuario probablemente rechace, dejando el mismo problema de fallback sin resolver la fricción.
- **Solo manual, sin auto-detección**: más simple, pero pierde la personalización automática que
  el cliente pidió explícitamente para el CTA de WhatsApp.

## Consecuencias

- Depende de tener hosting con funciones edge (ver ADR 0002) — no es viable en GitHub Pages puro.
- La detección solo afecta la preselección de bandera/idioma/mensaje de WhatsApp, no el contenido
  general de la home.
