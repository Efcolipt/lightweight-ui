import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import { BUILD_LIB_ALIASES } from '@lightweight-ui/shared'
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
      name: BUILD_LIB_ALIASES.core,
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['cjs', 'es', 'umd'],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },

    rollupOptions: {
      external: [BUILD_LIB_ALIASES.shared],
    },
  },
})
