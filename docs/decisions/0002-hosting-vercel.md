# ADR 0002 — Hosting: Vercel

**Estado:** aceptado

## Contexto

El cliente pensaba en GitHub Pages por velocidad/SEO. GitHub Pages es 100% estático: no ofrece
funciones serverless/edge, lo cual choca con dos necesidades del proyecto — detección de región sin
fricción (ADR 0003) y, a futuro, un endpoint propio para los formularios (ADR 0004).

## Decisión

Alojar en **Vercel**, sobre una cuenta nueva ligada a un GitHub personal del cliente ya creado
(mantiene el plan Hobby gratuito, independiente de otros proyectos existentes del cliente en Vercel).
Vercel sirve el output estático de Astro con la misma velocidad/SEO que GitHub Pages, y suma:
geo-IP disponible en el edge sin costo, deploys de preview automáticos por PR, y funciones serverless
para cuando se conecten los formularios.

## Alternativas descartadas

- **GitHub Pages**: gratis y simple, pero sin capacidad de servidor — la detección de región tendría
  que hacerse vía geolocalización del navegador (pide permiso, fricción) o una API externa desde el
  cliente; los formularios necesitarían un servicio de terceros.

## Consecuencias

- Requiere login interactivo (`gh auth login`, "Continue with GitHub" en Vercel) — documentado como
  setup guiado en `DEVELOPMENT.md`, a ejecutar cuando el cliente esté listo.
- Se agregan los MCP servers de GitHub y Vercel apuntando a esa cuenta como parte de ese mismo setup.
