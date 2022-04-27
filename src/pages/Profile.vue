<template>
  <div class="flex-grid">
    <div class="col-3 push-top">
      <div class="profile-card">
        <p class="text-center">
          <img
            :src="user.avatar"
            alt=""
            class="avatar-xlarge"
          >
        </p>

        <h1 class="title">
          {{ user.username }}
        </h1>

        <p class="text-lead">
          {{ user.name }}
        </p>

        <p class="text-justify">
          <span v-if="user.bio">{{ user.bio }}</span>
          <span v-else>No bio specified.</span>
        </p>

        <span class="online">{{ user.username }} is online</span>


        <div class="stats">
          <span>{{ userPostsCount }} post{{ userPostsCount === 1 ? '' : 's' }}</span>
          <span>{{ userThreadsCount }} thread{{ userThreadsCount === 1 ? '' : 's' }}</span>
        </div>

        <hr>

        <p
          v-if="user.website"
          class="text-large text-center"
        >
          <i class="fa fa-globe" /> <a :href="user.website">{{ user.website }}</a>
        </p>
      </div>

      <p class="text-xsmall text-faded text-center">
        Member since june 2003, last visited 4 hours ago
      </p>

      <div class="text-center">
        <hr>
        <a
          href="edit-profile.html"
          class="btn-green btn-small"
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

      <PostList :posts="userPosts" />
    </div>
  </div>
</template>

<script>
import PostList from '../components/PostList'
import { mapStores } from 'pinia'
import { useAuthUserStore } from '../stores/authUser'
import { useThreadsStore } from '../stores/threads'
import { usePostsStore } from '../stores/posts'

export default {
  components: {
    PostList
  },
  computed: {
    user() {
      return this.authUserStore.authUser
    },
    userThreadsCount() {
      return this.threadsStore.getThreadsByUserId(this.authUserStore.authId)?.length || 0
    },
    userPostsCount() {
      return this.userPosts?.length || 0
    },
    userPosts() {
      return this.postsStore.getPostsByUserId(this.authUserStore.authId)
    },
    ...mapStores(useAuthUserStore, useThreadsStore, usePostsStore)
  }
}
</script>

<style scoped>
  
</style>