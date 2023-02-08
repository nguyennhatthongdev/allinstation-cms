import { App } from 'vue'

const filters = {}

export const setGlobalFilter = (app: App) => {
  app.config.globalProperties.$filters = filters
}
