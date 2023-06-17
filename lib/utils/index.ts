import { all } from 'deepmerge'

export const deepMerge = <T>(...objects: object[]): T => {
  return all<T>(objects)
}
