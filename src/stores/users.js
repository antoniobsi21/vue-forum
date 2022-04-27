import { defineStore } from 'pinia'
import sourceData from '../data.json'

export const useUsersStore = defineStore('users', {
  state: () => {
    return {
      users: sourceData.users
    }
  },
  getters: {
    getUserById: (state) => {
      return (userId) => state.users.find((user) => user.id === userId)
    }
  }
})