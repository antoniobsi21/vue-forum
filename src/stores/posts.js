import { defineStore } from 'pinia'
import sourceData from '../data.json'
import { useThreadsStore } from './threads'

export const usePostsStore = defineStore('posts', {
  state: () => {
    return {
      posts: sourceData.posts
    }
  },
  getters: {
    getPostsByThreadId: (state) => {
      return (threadId) => state.posts.filter((post) => post.threadId === threadId)
    },
    getPostsByUserId: (state) => {
      return (userId) => state.posts.filter((post) => post.userId === userId)
    }
  },
  actions: {
    addPost(post) {
      const threadsStore = useThreadsStore()

      this.posts.push(post)
      threadsStore.getThreadById(post.threadId).posts.push(post.id)
    }
  }
})