import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkLiveInternalLinks from './src/lib/remark-live-links.mjs';

export default defineConfig({
  site: 'https://borck.consulting',
  markdown: {
    remarkPlugins: [remarkLiveInternalLinks],
  },
  integrations: [sitemap()],
});
