<!-- community-vue/src/views/HomeView.vue -->
<template>
    <div class="home">
      <h2>홈 페이지</h2>
      <p>환영합니다! 최신 게시물을 확인하세요.</p>
      <PostList :posts="posts.slice(0, 5)" />
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
  .home {
    padding: 20px;
  }
  </style>
  