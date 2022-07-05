import Router from 'vue-router';
import Vue from 'vue';
Vue.use(Router);

const Home = () => import('@/views/home');
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    routes,
  });
const router = createRouter();
export default router;
