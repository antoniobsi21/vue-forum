import { defineStore } from 'pinia'
import sourceData from '../data.json'
import { useThreadsStore } from './threads'

export const usePostsStore = defineStore('posts', {
  state: () => {
    return {
      posts: sourceData.posts
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