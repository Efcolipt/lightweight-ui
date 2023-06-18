import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import { createAlias, PROJECT_NAME } from '@lightweight-ui/shared'
import dts from 'vite-plugin-dts'

const aliasCoreProject = createAlias('core')

export default defineConfig({
  optimizeDeps: {
    include: [PROJECT_NAME],
  },

  plugins: [
    dts({
      insertTypesEntry: true,
      outputDir: 'dist/types',
    }),
  ],

  build: {
    lib: {
      name: aliasCoreProject,
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['cjs', 'es', 'umd'],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
  },
})
