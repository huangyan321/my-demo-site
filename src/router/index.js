import Router from 'vue-router';
import Vue from 'vue';
import Layout from '@/layout';
Vue.use(Router);

const Dashboard = () => import('@/views/Dashboard');
let routes = [
  {
    path: '/',
    name: 'dashboard',
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
          title: 'dashboard',
          icon: 'el-icon-user',
        },
      },
    ],
  },
];

// 自动加载 global 目录下的 .js 结尾的文件
const routerContext = require.context('./modules', true, /\.js$/);

routerContext.keys().forEach((route) => {
  /**
   * 兼容 import export 和 require module.export 两种规范
   */
  const routerModule = routerContext(route);
  routes = [...routes, ...(routerModule.default || routerModule)];
});

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    routes,
  });
const router = createRouter();
export default router;
