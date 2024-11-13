<!-- community-vue/src/views/QAView.vue -->
<template>
    <div class="qa">
      <h2>Q&A</h2>
      <PostList :posts="posts" basePath="/qa" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import PostList from '../components/PostList.vue';
  
  const posts = ref([
    { id: 1, title: '첫 번째 질문', content: '질문 내용입니다.' },
    { id: 2, title: '두 번째 질문', content: '질문 내용입니다.' },
    // 추가 질문 데이터
  ]);
  </script>
  
  <style scoped>
  .qa {
    padding: 20px;
  }
  </style>
  