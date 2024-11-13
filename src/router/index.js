// community-vue/src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PostsView from '../views/PostsView.vue';
import PostDetailView from '../views/PostDetailView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/posts', name: 'Posts', component: PostsView },
  { path: '/posts/:id', name: 'PostDetail', component: PostDetailView, props: true },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
