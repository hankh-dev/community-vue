<!-- community-vue/src/views/PostDetailView.vue -->
<template>
    <div class="post-detail">
      <h2>{{ post.title }}</h2>
      <p>{{ post.content }}</p>
  
      <!-- 댓글 목록 컴포넌트 추가 -->
      <CommentList :initialComments="post.comments" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  import CommentList from '../components/CommentList.vue';
  
  const route = useRoute();
  const postId = parseInt(route.params.id);
  
  const posts = ref([
    { id: 1, title: '첫 번째 게시물', content: '내용입니다.', comments: [] },
    { id: 2, title: '두 번째 게시물', content: '내용입니다.', comments: [] },
    // 추가 게시물 데이터
  ]);
  
  const post = ref(posts.value.find((p) => p.id === postId));
  
  if (!post.value) {
    post.value = { title: '게시물을 찾을 수 없습니다.', content: '', comments: [] };
  }
  </script>
  
  <style scoped>
  .post-detail {
    padding: 20px;
  }
  </style>
  