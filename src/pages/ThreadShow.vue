<template>
  <div
    class="col-large push-top"
  >
    <h1>{{ thread.title }}</h1>

    <post-list :posts="threadPosts" />
    <post-editor @save="addPost" />
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import PostEditor from '@/components/PostEditor.vue'

import { mapStores } from 'pinia'
import { useThreadsStore } from '../stores/threads'
import { usePostsStore } from '../stores/posts'

export default {
  name: 'ThreadShow',
  components: {
    PostList,
    PostEditor
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    thread() {
      return this.threadsStore.getThreadById(this.id)
    },
    threadPosts() {
      return this.postsStore.getPostsByThreadId(this.id)
    },
    ...mapStores(useThreadsStore, usePostsStore)
  },
  methods: {
    addPost(eventData) {
      const post = {
        ...eventData.post,
        threadId: this.id,
      }

      this.postsStore.addPost(post)

      this.newPostText = ''
    }
  },
};
</script>

<style scoped>

</style>