const PROJECT_NAME = '@lightweight-ui'

const createAlias = (alias: string) => `${PROJECT_NAME}/${alias}`

export const ALIASES = {
  shared: createAlias('shared'),
  core: createAlias('core'),
}
