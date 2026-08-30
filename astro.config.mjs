// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // docs/specs/010-i18n-region.md: español sin prefijo (default), inglés bajo
  // /en/... cuando la región detectada/elegida es "Global".
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
