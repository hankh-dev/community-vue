<!-- community-vue/src/components/CommentList.vue -->
<template>
    <div class="comment-list">
      <h3>댓글 {{ comments.length }}개</h3>
      <ul>
        <li v-for="(comment, index) in comments" :key="index">
          <Comment :comment="comment" />
        </li>
      </ul>
      <div class="comment-form">
        <h4>댓글 작성하기</h4>
        <v-text-field
          v-model="newCommentAuthor"
          label="이름을 입력하세요."
          outlined
          dense
        />
        <v-textarea
          v-model="newCommentContent"
          label="댓글을 입력하세요."
          outlined
          dense
        ></v-textarea>
        <v-btn @click="addComment" color="primary">등록</v-btn>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Comment from './Comment.vue';
  
  const props = defineProps({
    initialComments: {
      type: Array,
      default: () => [],
    },
  });
  
  const comments = ref([...props.initialComments]);
  const newCommentAuthor = ref('');
  const newCommentContent = ref('');
  
  function addComment() {
    if (newCommentContent.value.trim() !== '' && newCommentAuthor.value.trim() !== '') {
      comments.value.push({
        author: newCommentAuthor.value.trim(),
        content: newCommentContent.value.trim(),
      });
      newCommentContent.value = '';
      newCommentAuthor.value = '';
    }
  }
  </script>
  
  <style scoped>
  .comment-list {
    margin-top: 20px;
  }
  .comment-form {
    margin-top: 20px;
  }
  .comment-form input,
  .comment-form textarea {
    width: 100%;
    padding: 8px;
    margin-bottom: 8px;
  }
  .comment-form button {
    padding: 8px 16px;
  }
  </style>
  