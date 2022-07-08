import Layout from '@/layout';
const Sandbox = () => import('@/views/tool/sandbox');
const Dashboard = () => import('@/views/Dashboard');
export default [
  {
    path: '/tool',
    name: 'Tool',
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
