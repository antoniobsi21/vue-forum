<template>
  <div class="forum-list">
    <h2 class="list-title">
      <router-link
        v-if="categoryId"
        :to="{ name: 'Category', params: { id: categoryId } }"
      >
        {{ title }}
      </router-link>
      <span v-else>{{ title }}</span>
    </h2>

    <div 
      v-for="forum in forums"
      :key="forum.id"
      class="forum-listing"
    >
      <div class="forum-details">
        <router-link
          :to="{ name: 'Forum', params: { id: forum.id } }"
          class="forum-name"
        >
          {{ forum.name }}
        </router-link>

        <p class="forum-description ">
          {{ forum.description }}
        </p>
      </div>
      <div class="thread-count">
        <p>
          <span class="count">
            {{ forum.threads?.length || '0' }}
          </span>
          {{ forum.threads?.length === 1 ? 'threads' : 'thread' }}
        </p>
      </div>

      <div class="last-thread" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    forums: {
      required: true,
      type: Array
    },
    title: {
      required: true,
      type: String,
    },
    categoryId: {
      required: true,
      type: String
    }
  }
}
</script>

<style scoped>
  
</style>