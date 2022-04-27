import { defineStore } from 'pinia'
import sourceData from '../data.json'

export const useThreadsStore = defineStore('threads', {
  state: () => {
    return {
      threads: sourceData.threads
    }
  },
  getters: {
    getThreadById: (state) => {
      return (threadId) => state.threads.find((thread) => thread.id === threadId)
    },
    getThreadsByUserId: (state) => {
      return (userId) => state.threads.filter((thread) => thread.userId === userId)
    }
  },
})