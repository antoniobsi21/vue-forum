<template>
  <div class="flex-grid">
    <div class="col-3 push-top">
      <UserProfileCard
        v-if="!edit"
        :user="user"
      />
      <UserProfileCardEditor
        v-if="edit"
        :user="user"
      />
    </div>

    <div class="col-7 push-top">
      <div class="profile-header">
        <span class="text-lead">
          {{ user.username }}'s recent activity
        </span>
        <a href="#">See only started threads?</a>
      </div>

      <hr>

      <PostList :posts="user.posts" />
    </div>
  </div>
</template>

<script>
import PostList from '../components/PostList'
import UserProfileCard from '../components/UserProfileCard.vue'
import UserProfileCardEditor from '../components/UserProfileCardEditor.vue'
import { mapStores } from 'pinia'
import { useAuthUserStore } from '../stores/authUser'

export default {
  components: {
    PostList,
    UserProfileCard,
    UserProfileCardEditor
  },
  props: {
    edit: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    user() {
      return this.authUserStore.authUser
    },
    ...mapStores(useAuthUserStore)
  }
}
</script>

<style scoped>
  
</style>