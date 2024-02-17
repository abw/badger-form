import { defineConfig } from 'vite'
import react            from '@vitejs/plugin-react'
import jsconfigPaths    from 'vite-jsconfig-paths'
import copy             from 'rollup-plugin-copy'
import define           from  './vite.defs.js'

export default defineConfig({
  plugins: [
    react(),
    jsconfigPaths()
  ],
  define,
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './test/setup.js',
    include: ['test/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['test/setup.js', 'test/lib'],
    coverage: {
      provider: 'v8',
      reporter: ['html'],
      exclude: [
        'coverage/**',
        'dist/**',
        'docs/**',
        'tmp/**',
        '*-OLD/**',
        'website/**',
        '**/[.]**',
        'test?(s)/**',
        '**/{rollup,vite,vitest,build}.{config,defs,docs}.*',
        '**/.{eslint,mocha,prettier}rc.{?(c|m)js,yml}',
      ]
    }
  },
  build: {
    minify: true,
    sourcemap: false,
    lib: {
      entry: 'lib/index.js',
      name: '@abw/badger-form',
      fileName: 'badger-form',
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime'
      ],
      output: {
        globals: {
          'react': 'react',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime'
        },
      },
      plugins: [
        copy({
          targets: [
            {
              src: 'styles/*',
              dest: 'dist/styles',
            },
          ],
          hook: 'writeBundle'
        })
      ]
    },
  },
})
