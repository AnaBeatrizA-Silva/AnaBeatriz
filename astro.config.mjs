// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://AnaBeatrizA-Silva.github.io',
  base: '/AnaBeatriz',

  vite: {
    plugins: [tailwindcss()],
  },
});
