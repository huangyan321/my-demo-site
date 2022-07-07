import Router from 'vue-router';
import Vue from 'vue';
import Layout from '@/layout';
Vue.use(Router);

const Dashboard = () => import('@/views/Dashboard');
const About = () => import('@/views/about');
const routes = [
  {
    path: '/',
    name: 'Dashboard',
    redirect: '/dashboard',
    component: Layout,
    meta: {
      title: '测试home1',
      icon: 'el-icon-user',
    },
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
        meta: {
          title: '测试dashboard',
          icon: 'el-icon-user',
        },
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    redirect: '/about',
    component: Layout,
    meta: {
      title: '测试about1',
      icon: 'el-icon-user',
    },
    children: [
      {
        path: 'index',
        component: About,
        meta: {
          title: '测试about1',
          icon: 'el-icon-user',
        },
      },
      {
        path: 'about',
        component: Dashboard,
        meta: {
          title: '测试about2',
          icon: 'el-icon-user',
        },
      },
    ],
  },
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    routes,
  });
const router = createRouter();
export default router;
