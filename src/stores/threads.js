import { defineStore } from 'pinia'
import sourceData from '../data.json'
import { useAuthUserStore } from './authUser'
import { useForumsStore } from './forums'
import { usePostsStore } from './posts'

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
  actions: {
    addThread(title, text, forumId) {
      return new Promise((resolve, reject) => {
        try {
          const authUserStore = useAuthUserStore()
          const forumsStore = useForumsStore()
          const postsStore = usePostsStore()

          const userId = authUserStore.authId
          
          const id = 'ggqq' + Math.random()
          
          const thread = {
            id,
            title,
            userId,
            forumId,
            publishedAt: Math.floor(Date.now() / 1000)
          }
          
          // Create Thread
          this.threads.push(thread)
          // Add Thread to Forum
          forumsStore.getForumById(forumId).threads.push(thread.id)
          // Create the "opening thread post" passing the thread ID
          postsStore.addPost({ text, threadId: thread.id })
          resolve(thread)
        } catch(exception) {
          reject({ exception })
        }
      })
    }
  }
})