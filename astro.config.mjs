// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://wychwood-partners.com',
  redirects: {
    '/concepts': '/frameworks',
    '/concepts/operational-context-layer': '/frameworks/operating-system',
    '/concepts/company-operating-system': '/frameworks/operating-system',
    '/concepts/execution-architecture': '/frameworks/operating-system',
    '/concepts/decision-governance': '/frameworks/operating-system',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx(), sitemap()],
});