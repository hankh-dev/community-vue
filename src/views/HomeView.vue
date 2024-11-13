<!-- community-vue/src/views/HomeView.vue -->
<template>
  <div class="home">
    <h2>홈 페이지</h2>
    <p>환영합니다! 최신 게시물을 확인하세요.</p>
    <router-link to="/qa">Q&A 게시판으로 이동</router-link>
    <br />
    <router-link to="/community">커뮤니티 게시판으로 이동</router-link>
  </div>
</template>

<script setup>
</script>

<style scoped>
.home {
  padding: 20px;
}
</style>
