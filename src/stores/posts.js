import { defineStore } from 'pinia'
import sourceData from '../data.json'
import { useThreadsStore } from './threads'
import { useAuthUserStore } from './authUser'

export const usePostsStore = defineStore('posts', {
  state: () => {
    return {
      posts: sourceData.posts
    }
  },
  actions: {
    addPost(post) {
      const threadsStore = useThreadsStore()
      const authUserStore = useAuthUserStore()

      post.userId = authUserStore.authId
      post.publishedAt = Math.floor(Date.now() / 1000)

      this.posts.push(post)
      const thread = threadsStore.getThreadById(post.threadId)
      if(!thread.posts) {
        thread.posts = []
      }
      thread.posts.push(post.id)
    }
  }
})