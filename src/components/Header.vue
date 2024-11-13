<!-- community-vue/src/components/Header.vue -->
<template>
    <header class="header">
      <h1>커뮤니티 사이트</h1>
      <nav>
        <router-link to="/">홈</router-link>
        <router-link to="/posts">게시판</router-link>
      </nav>
    </header>
  </template>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background-color: #f8f9fa;
  }
  nav a {
    margin: 0 8px;
    text-decoration: none;
    color: #333;
  }
  </style>
  