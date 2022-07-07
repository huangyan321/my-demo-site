import Router from 'vue-router';
import Vue from 'vue';
import Layout from '@/layout';
Vue.use(Router);

const Dashboard = () => import('@/views/Dashboard');
const Sandbox = () => import('@/views/sandbox');
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
          title: 'Dashboard',
          icon: 'el-icon-user',
        },
      },
    ],
  },
  {
    path: '/tool',
    name: 'Tool',
    redirect: '/about',
    component: Layout,
    meta: {
      title: '测试工具',
      icon: 'el-icon-user',
      cache: true,
    },
    children: [
      {
        path: 'sandbox',
        component: Sandbox,
        meta: {
          title: '沙盒',
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
