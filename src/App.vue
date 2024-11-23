<!-- community-vue/src/App.vue -->
<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
  background-color: #f5f5f5;
}
</style>
