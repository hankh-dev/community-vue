// community-vue/src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Vuetify 관련 임포트
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Vuetify 초기화
const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(router).use(vuetify).mount('#app');
