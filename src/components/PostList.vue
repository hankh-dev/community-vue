<!-- community-vue/src/components/PostList.vue -->
<template>
    <div class="post-list">
      <ul>
        <li v-for="post in posts" :key="post.id">
          <router-link :to="{ name: 'PostDetail', params: { id: post.id } }">
            {{ post.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  defineProps({
    posts: {
      type: Array,
      default: () => [],
    },
  });
  </script>
  
  <style scoped>
  .post-list ul {
    list-style: none;
    padding: 0;
  }
  .post-list li {
    margin: 8px 0;
  }
  </style>
  