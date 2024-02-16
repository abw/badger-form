import { defineConfig } from 'vite'
import react            from '@vitejs/plugin-react'
import svgr             from 'vite-plugin-svgr'
import jsconfigPaths    from 'vite-jsconfig-paths'
import define           from  './vite.defs.js'
import fs               from 'node:fs'

const https = {
  key:  fs.readFileSync('etc/certs/badger-form.local.wardley.org.key'),
  cert: fs.readFileSync('etc/certs/badger-form.local.wardley.org.crt'),
}

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    jsconfigPaths({ root: '../' })
  ],
  root: 'website',
  base: '/badger-form/',
  envDir: '../',
  define,
  build: {
    emptyOutDir: true,
    outDir: '../docs'
  },
  server: {
    host: 'badger-form.local.wardley.org',
    port: 3012,
    https
  }
})

