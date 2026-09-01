// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://temperanda.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
