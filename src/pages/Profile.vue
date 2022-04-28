<template>
  <div class="flex-grid">
    <div class="col-3 push-top">
      <UserProfileCardEditor
        v-if="isEditing"
        :user="user"
      />
      <UserProfileCard
        v-else
        :user="user"
      />
      <p class="text-xsmall text-faded text-center">
        Member since june 2003, last visited 4 hours ago
      </p>

      <div class="text-center">
        <hr>
        <a
          href="edit-profile.html"
          class="btn-green btn-small"
          @click.prevent="isEditing = true"
        >Edit Profile</a>
      </div>
    </div>

    <div class="col-7 push-top">
      <div class="profile-header">
        <span class="text-lead">
          Joker's recent activity
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
  data() {
    return {
      isEditing: false
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