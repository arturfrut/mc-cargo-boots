# 001 — Layout shell (header, footer, nav, selector región/idioma)

## Objetivo

Estructura común a todas las páginas del sitio: header con logo, navegación, selector de
región/idioma, y footer con contacto.

## Contenido / datos

- Logo: versión principal (símbolo blanco + círculo turquesa + texto gris) sobre fondo oscuro en
  header y footer. Assets pendientes de pedir al cliente (`brand/brand-guide.md` §4) — usar
  placeholder hasta tenerlos, nunca recrear el logo.
- Nav: enlaces a Nosotros, Productos, Contacto, Technical Gallery (anclas en home o rutas reales
  según corresponda a cada spec).
- Selector de región/idioma: bandera Argentina / Colombia / Global, visible siempre — esquina
  superior o dentro de un menú hamburguesa (definir en implementación cuál calza mejor con el header
  del hero). Ver `010-i18n-region.md` para el comportamiento completo.
- CTA de WhatsApp accesible desde el header (ícono o botón corto) además del CTA del hero.

## Reglas de marca aplicables

- Fondo `#111111`, header sin turquesa como fondo (solo acentos: ícono activo, línea divisoria).
- Favicon = isotipo del logo.
- Tipografía de nav: Poppins (no Blippo/Righteous, reservada a títulos).

## Abierto / pendiente

- ~~Definir si el selector de región va como banderas fijas en la esquina o colapsado en el menú
  hamburguesa junto con el nav~~ — resuelto: banderas fijas siempre visibles en el header (colapsa
  junto al nav solo en mobile). Ver `010-i18n-region.md` § Estado de implementación.
