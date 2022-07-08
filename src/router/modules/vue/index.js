import Layout from '@/layout';
const LifeCycle = () => import('@/views/vue/lifecycle');
const Dashboard = () => import('@/views/Dashboard');
export default [
  {
    path: '/vue',
    name: 'Vue',
    component: Layout,
    meta: {
      title: 'vue相关',
      icon: 'el-icon-user',
      cache: true,
    },
    children: [
      {
        path: 'lifeCycle',
        component: LifeCycle,
        meta: {
          title: '生命周期',
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
