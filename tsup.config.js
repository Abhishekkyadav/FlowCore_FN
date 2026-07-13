// tsup.config.js
import { defineConfig } from 'tsup';
import path from 'path';

export default defineConfig({
  // 1. Kahan se shuru karo (entry point)
  entry: ['src/pkg-index.jsx'],

  // 2. Dono formats generate karo
  format: ['cjs', 'esm'],

  // 3. React 17+ automatic JSX (import React nahi likhna padega)
  jsxRuntime: 'automatic',

  // 4. Build se pehle dist/ folder saaf karo
  clean: true,

  // 5. YEH SABSE IMPORTANT: react/next ko bundle MAT karo
  external: [
    'react',
    'react-dom',
    'next',
    'next/navigation',
    'next/link',
    'next/image',
  ],

  // 6. @/ ko src/ me resolve karo aur .js files ke liye JSX loader enable karo
  esbuildOptions(options) {
     options.alias = {
     '@': path.resolve('./src'),
  };

  // YEH ADD KAREN: esbuild ko batayein ki .js files mein bhi JSX ho sakta hai
  options.loader = {
     ...options.loader,
     '.js': 'jsx',
    };
  },
});