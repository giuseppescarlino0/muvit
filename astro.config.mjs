import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://muvit.cloud',
  integrations: [
    sitemap({
      customPages: [
        '/contatti',
        '/flotta',
        '/perche-muvit',
        '/qualita'
      ]
    })
  ]
});