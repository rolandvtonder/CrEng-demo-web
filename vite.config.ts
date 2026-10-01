import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// One HTML entry per page: every section of the site is a real, linkable page.
const PAGES = ['index', 'services', 'training', 'about', 'insights', 'contact']

// https://vite.dev/config/
export default defineConfig({
  // relative, so the build works at a domain root or under /CrEng-demo-web/ on GitHub Pages
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        PAGES.map((p) => [p, resolve(import.meta.dirname, `${p}.html`)]),
      ),
    },
  },
})
