<!-- community-vue/src/components/PostList.vue -->
<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" v-for="post in posts" :key="post.id">
        <v-card class="mb-4" @click="navigateToPost(post.id)">
          <v-card-title>{{ post.title }}</v-card-title>
          <v-card-text>{{ post.content }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router';
const props = defineProps({
  posts: {
    type: Array,
    default: () => [],
  },
  basePath: {
    type: String,
    required: true,
  },
});
const router = useRouter();

function navigateToPost(id) {
  router.push(`${props.basePath}/${id}`);
}
</script>

<style scoped>
</style>
