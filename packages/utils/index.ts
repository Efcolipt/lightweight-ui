import { all } from 'deepmerge'

export const deepMerge = <T = object>(...objects: object[]): T => {
  return all<T>(objects)
}
