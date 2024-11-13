<!-- community-vue/src/App.vue -->
<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<style>
/* 전역 스타일을 여기에 추가할 수 있습니다. */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>
