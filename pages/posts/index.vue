<template>
  <div class="max-w-4xl mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6">📬 All Posts</h1>
    <div class="grid gap-4">
      <PostCard v-for="post in store.posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PostCard from '@/components/PostCard.vue'
import { usePostsStore } from '@/stores/posts'

const store = usePostsStore()
await store.fetchPosts()
</script>
