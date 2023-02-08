import { defineStore } from 'pinia'

export const useTemplateStore = defineStore('TemplateStore', {
  // State
  state: () => ({
    templates: []
  }),

  // Getters
  getters: {
    // Arrow function
    // countTemplates: (state) => state.templates.length
    countTemplates ():number {
      return this.templates.length
    }
  },

  // Actions
  actions: {
    async fill () {}
  }
})
