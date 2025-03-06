---
layout: home

hero:
  name: "My Awesome Project"
  text: "A VitePress Site"
  tagline: My great project tagline
---

<script setup>
import { data } from './recipes.data.js'
const listData = data.map(({ filePath, metadata })=> {
  const title = metadata.title || filePath.split("/").slice(-1)[0];
  return {
    title, filePath
  }
})
</script>

<li v-for="post of listData">
  <a :href="post.filePath">{{ post.title }}</a>
</li>
