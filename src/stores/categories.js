import { defineStore } from 'pinia'
import sourceData from '../data.json'

export const useCategoriesStore = defineStore('categories', {
  state: () => {
    return {
      categories: sourceData.categories
    }
  },
})