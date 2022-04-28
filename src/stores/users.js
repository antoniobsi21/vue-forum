import { defineStore } from 'pinia'
import sourceData from '../data.json'
import { usePostsStore } from './posts'
import { useThreadsStore } from './threads'

export const useUsersStore = defineStore('users', {
  state: () => {
    return {
      users: sourceData.users
    }
  },
  getters: {
    getUserById: (state) => {
      return (userId) => {
        const user = state.users.find((user) => user.id === userId)

        if(!user) return null

        const postsStore = usePostsStore()
        const threadsStore = useThreadsStore()

        return {
          ...user,
          get posts() {
           return postsStore.posts.filter((post) => post.userId === userId)
          },
          get postsCount() {
            return this.posts.length
          },
          get threads() {
            return threadsStore.threads.filter((thread) => thread.userId === userId)
          },
          get threadsCount() {
            return this.threads.length
          }
        }
      }
    },
  },
  actions: {
    updateUser(updatedUser) {
      const userIndex = this.users.findIndex((user) => user.id === updatedUser.id)
    
      if(userIndex != -1) {
        this.users[userIndex] = updatedUser
      }
    }
  }
})