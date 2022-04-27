import { defineStore } from 'pinia'
import { useUsersStore } from './users'

export const useAuthUserStore = defineStore('authUser', {
  state: () => {
    return {
      authId: 'VXjpr2WHa8Ux4Bnggym8QFLdv5C3'
    }
  },
  getters: {
    authUser: (state) => {
      const authUserStore = useUsersStore()
      
      return authUserStore.getUserById(state.authId)      
    }
  }
})