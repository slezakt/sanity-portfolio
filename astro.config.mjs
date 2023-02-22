import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

// https://astro.build/config
import sanity from 'astro-sanity';
import netlify from '@astrojs/netlify/functions';

const { PROJECT_ID } = loadEnv(
  import.meta.env.MODE,
  process.cwd(),
  ''
);

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [
    sanity({
      projectId: PROJECT_ID,
      dataset: 'production',
      apiVersion: 'v2021-03-25',
      useCdn: true,
    }),
  ],
});
