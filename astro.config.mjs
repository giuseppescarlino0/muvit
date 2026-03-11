// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://muvit.it", // IMPORTANT: cambia quando hai il dominio finale
  integrations: [sitemap()],
});