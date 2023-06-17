import { LibraryFormats, LibraryOptions, BuildOptions, UserConfig } from 'vite'
import { ___NAME_PROJECT___ } from './const'
import { resolve } from 'path'

export const createBuildLib = (
  pathToEntry: string | string[],
  formats: LibraryFormats[] = ['cjs', 'es', 'umd']
): LibraryOptions => {
  return {
    entry: pathToEntry,
    name: ___NAME_PROJECT___,
    fileName: (format: string) => `${___NAME_PROJECT___}.${format}.js`,
    formats,
  }
}

export const createUserConfig = (): UserConfig => {
  return {
    resolve: {
      alias: {
        '@/utils': resolve(__dirname, '../../lib/utils'),
      },
    },
  }
}

export const createBuildConfig = (
  pathToEntry: string | string[],
  pathToOutDir: string
): BuildOptions => {
  return {
    emptyOutDir: true,
    minify: true,
    lib: createBuildLib(pathToEntry),
    outDir: pathToOutDir,
  }
}
