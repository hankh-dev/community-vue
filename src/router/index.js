// community-vue/src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import QAView from '../views/QAView.vue'; // 추가된 부분
import CommunityView from '../views/CommunityView.vue'; // 추가된 부분
import PostDetailView from '../views/PostDetailView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/qa', name: 'QA', component: QAView }, // 추가된 부분
  { path: '/qa/:id', name: 'QADetail', component: PostDetailView, props: true }, // 추가된 부분
  { path: '/community', name: 'Community', component: CommunityView }, // 추가된 부분
  { path: '/community/:id', name: 'CommunityDetail', component: PostDetailView, props: true }, // 추가된 부분
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
