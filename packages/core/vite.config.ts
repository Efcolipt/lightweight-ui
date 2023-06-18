import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import { createAlias } from '@lightweight-ui/config'

const aliasProject = createAlias('core')

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: true,

    lib: {
      name: aliasProject,
      entry: resolve(__dirname, './src/index.ts'),
      formats: ['cjs', 'es', 'umd'],
      fileName: (format) => `${aliasProject}.${format}.js`,
    },
  },
})
