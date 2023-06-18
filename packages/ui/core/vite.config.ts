import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import { ALIASES } from '@lightweight-ui/shared'
import dts from 'vite-plugin-dts'

export default defineConfig({
  optimizeDeps: {
    include: [ALIASES.shared],
  },

  plugins: [
    dts({
      insertTypesEntry: true,
      outputDir: 'dist/types',
    }),
  ],

  build: {
    lib: {
      name: ALIASES.core,
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['cjs', 'es', 'umd'],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
  },
})
