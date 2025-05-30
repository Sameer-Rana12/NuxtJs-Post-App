
<template>
  <div class="max-w-3xl mx-auto p-6">

    <NuxtLink to="/posts" class="text-blue-600 hover:underline">← Back to posts</NuxtLink>
    <h1 class="text-3xl font-bold mt-4">{{ post?.title }}</h1>
    <p class="mt-4 text-gray-700 whitespace-pre-line">{{ post?.body }}</p>

  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

import { ref, onMounted } from 'vue'

const route = useRoute()

const post = ref<any>(null)

onMounted(async () => {

  const res = await fetch(`https://dummyjson.com/posts/${route.params.id}`)
  post.value = await res.json()
})
</script>
