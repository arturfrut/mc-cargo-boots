// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Config reducida al mínimo mientras main sirve solo el placeholder "en
// construcción" — el sitio completo (con i18n, ver docs/specs/010-i18n-region.md)
// vive respaldado en la rama `site-full`.
export default defineConfig({
  site: 'https://mccargoboots.com',
});
