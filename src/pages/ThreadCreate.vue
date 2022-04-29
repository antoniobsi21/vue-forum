<template>
  <div class="col-full push-top">
    <h1>Create new thread in <i>{{ forum.name }}</i></h1>

    <form @submit.prevent="save">
      <div class="form-group">
        <label for="thread_title">Title:</label>
        <input
          id="thread_title"
          v-model="title"
          type="text"
          class="form-input"
          name="title"
        >
      </div>

      <div class="form-group">
        <label for="thread_content">Content:</label>
        <textarea
          id="thread_content"
          v-model="content"
          class="form-input"
          name="content"
          rows="8"
          cols="140"
        />
      </div>

      <div class="btn-group">
        <button
          class="btn btn-ghost"
          @click.prevent="cancel"
        >
          Cancel
        </button>
        <button
          class="btn btn-blue"
          type="submit"
          name="Publish"
        >
          Publish
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useForumsStore } from '../stores/forums'
import { useThreadsStore } from '../stores/threads'

export default {
  props: {
    forumId: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      title: '',
      content: '',
    }
  },
  computed: {
    forum() {
      return this.forumsStore.forums.find((forum) => forum.id === this.forumId)
    },
    ...mapStores(useForumsStore, useThreadsStore)
  },
  methods: {
    save() {
      this.threadsStore.addThread(this.title, this.content, this.forumId).then((thread) => {
        this.$router.push({ name: 'ThreadShow', params: { id: thread.id } })   
      })
    },
    cancel() {
      this.$router.push({ name: 'Forum', params: { id: this.forumId } })
    }
  }
}
</script>

<style scoped>
  
</style>