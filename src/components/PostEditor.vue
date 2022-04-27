<template>
  <div class="col-full">
    <form @submit.prevent="save">
      <div class="form-group">
        <textarea
          v-model="text"
          cols="30"
          rows="10"
          class="form-input"
        />
      </div>
      <div class="form-actions">
        <button class="btn-blue">
          Submit post
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  emits: ['save'],
  data() {
    return {
      text: ''
    }
  },
  methods: {
    save() {
      const postId = 'qqqq' + Math.random()
      const post = {
        id: postId,
        text: this.text,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.id,
        userId: 'rpbB8C6ifrYmNDufMERWfQUoa202'
      }

      this.$emit('save', { post })
      // this.posts.push(post)
      // this.thread.posts.push(post)

      this.text = ''
    }
  }
}
</script>
<style lang="">
  
</style>