<template>
  <div
    @click="$router.push(`/posts/${post.id}`)"
    class="cursor-pointer p-4 bg-white rounded-xl shadow hover:shadow-md transition-all"
  >
    <h2 class="text-xl font-semibold text-gray-800">{{ post.title }}</h2>
    <p class="text-gray-600 mt-2">{{ post.body.slice(0, 100) }}...</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ post: any }>()
</script>
