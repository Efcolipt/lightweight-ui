import { defineConfig } from 'vite'
import { resolve } from 'path'
import { createBuildConfig, createUserConfig } from '../shared/utils'

const buildConfig = createBuildConfig(
  resolve(__dirname, '../../lib/core/src/index.ts'),
  resolve(__dirname, '../../dist/core')
)

const userConfig = createUserConfig()

export default defineConfig({
  build: buildConfig,

  ...userConfig,
})
