<!-- community-vue/src/views/CommunityView.vue -->
<template>
    <div class="community">
      <h2>커뮤니티</h2>
      <PostList :posts="posts" basePath="/community" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import PostList from '../components/PostList.vue';
  
  const posts = ref([
    { id: 1, title: '첫 번째 게시물', content: '내용입니다.' },
    { id: 2, title: '두 번째 게시물', content: '내용입니다.' },
    // 추가 게시물 데이터
  ]);
  </script>
  
  <style scoped>
  .community {
    padding: 20px;
  }
  </style>
  