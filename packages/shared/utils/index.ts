import { all, Options } from 'deepmerge'

export const deepMerge = <T = object>(
  objects: Partial<T>[],
  options?: Options
): T => {
  return all<T>(objects, options)
}
