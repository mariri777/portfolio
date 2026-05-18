import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://mariri777.github.io',
  base: '/portfolio',
  trailingSlash: 'ignore',
  integrations: [tailwind({ applyBaseStyles: false })],
  server: { port: 4321 },
});
