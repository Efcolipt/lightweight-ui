import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import { ALIASES } from './const'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      outputDir: 'dist/types',
    }),
  ],

  build: {
    lib: {
      name: ALIASES.shared,
      entry: resolve(__dirname, 'index.ts'),
      formats: ['cjs', 'es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
  },
})
