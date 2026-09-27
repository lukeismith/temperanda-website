// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://temperanda.com',
  // The checkpoint page is noindex and only reached through /c/* links (public/_redirects).
  integrations: [sitemap({ filter: (page) => !page.endsWith('/checkpoint/') })],
  vite: {
    plugins: [tailwindcss()],
  },
});
