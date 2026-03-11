import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://muvit.it',
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