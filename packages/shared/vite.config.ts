import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import { BUILD_LIB_ALIASES } from './const'
import dts from 'vite-plugin-dts'

export default defineConfig({
  optimizeDeps: {
    include: [BUILD_LIB_ALIASES.shared],
  },

  plugins: [
    dts({
      insertTypesEntry: true,
      outputDir: 'dist/types',
    }),
  ],

  build: {
    lib: {
      name: BUILD_LIB_ALIASES.shared,
      entry: resolve(__dirname, 'index.ts'),
      formats: ['cjs', 'es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
  },
})
