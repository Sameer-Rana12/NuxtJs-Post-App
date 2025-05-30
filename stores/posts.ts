import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [] as any[],
    lastFetched: 0
  }),

  actions: {
    async fetchPosts() {
      const now = Date.now()
      const fifteenMins = 15 * 60 * 1000

      if (this.posts.length && now - this.lastFetched < fifteenMins) return

      try {
        const res = await fetch('https://dummyjson.com/posts')
        const data = await res.json()
        this.posts = data.posts
        this.lastFetched = now
      } catch (err) {
        console.error('Failed to fetch posts:', err)
      }
    }
  }
})
