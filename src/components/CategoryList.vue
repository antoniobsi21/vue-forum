<template>
  <div class="col-full">
    <ForumList
      v-for="category in categories"
      :key="category.id"
      :forums="getForumsByCategoryId(category.id)"
      :title="category.name"
      :category-id="category.id"
    />
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import ForumList from './ForumList.vue'

import { useForumsStore } from '../stores/forums'

export default {
  components: {
    ForumList
  },
  props: {
    categories: {
      required: true,
      type: Array
    }
  },
  computed: {
    ...mapStores(useForumsStore)
  },
  methods: {
    getForumsByCategoryId(categoryId) {
      return this.forumsStore.getForumsByCategoryId(categoryId)
    }
  },
}
</script>
<style scoped>
  
</style>