import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://giovanebarbosa.dev',
  vite: {
    server: {
      allowedHosts: ['giovanebarbosa.dev', 'www.giovanebarbosa.dev']
    },
    preview: {
      allowedHosts: ['giovanebarbosa.dev', 'www.giovanebarbosa.dev']
    }
  }
});
