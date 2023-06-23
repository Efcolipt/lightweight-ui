const PROJECT_NAME = '@lightweight-ui'

const createAlias = (alias: string) => `${PROJECT_NAME}/${alias}`

export const BUILD_LIB_ALIASES = {
  core: createAlias('core'),
  shared: createAlias('shared'),
}
