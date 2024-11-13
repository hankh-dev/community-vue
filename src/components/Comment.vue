<!-- community-vue/src/components/Comment.vue -->
<template>
    <div class="comment">
      <p><strong>{{ comment.author }}</strong></p>
      <p>{{ comment.content }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    comment: {
      type: Object,
      required: true,
    },
  });
  </script>
  
  <style scoped>
  .comment {
    border-bottom: 1px solid #eaeaea;
    padding: 10px 0;
  }
  </style>
  