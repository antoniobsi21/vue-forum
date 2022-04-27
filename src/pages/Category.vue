<template>
  <div>
    <h1>{{ category.name }}</h1>
    <ForumList 
      :title="category.name"
      :forums="getForumsByCategoryId(category.id)"
    />
  </div>
</template>

<script>
import sourceData from '../data.json'
import ForumList from '../components/ForumList.vue'

export default {
  components: {
    ForumList
  },
  props: {
    id: {
      required: true,
      type: String,
    }
  },
  computed: {
    category() {
      return sourceData.categories.find(category => category.id === this.id)
    }
  },
  methods: {
    getForumsByCategoryId(categoryId) {
      return sourceData.forums.filter(forum => forum.categoryId === categoryId)
    }
  }
}
</script>
<style scoped>
  
</style>