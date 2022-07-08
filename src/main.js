import Vue from 'vue';
import App from './App.vue';
import router from './router';
import '@/styles/index.scss'; // global css
import '@/styles/public.css'; // global css
import 'normalize.css/normalize.css'; // a modern alternative to CSS resets
import 'element-ui/lib/theme-chalk/index.css';
import '@/components';
import elementUI from 'element-ui';
Vue.config.productionTip = false;
Vue.use(elementUI);
new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
