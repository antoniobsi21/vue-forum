import { defineStore } from 'pinia'
import sourceData from '../data.json'

export const useForumsStore = defineStore('forums', {
  state: () => {
    return {
      forums: sourceData.forums
    }
  },
  getters: {
    getForumsByCategoryId: (state) => {
      return (categoryId) => state.forums.filter((forum) => forum.categoryId === categoryId)
    },
    getForumById: (state) => {
      return (forumId) => state.forums.find((forum) => forum.id === forumId)
    }
  }
})