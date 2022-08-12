import Layout from '@/layout';
const LifeCycle = () => import('@/views/vue/lifecycle');
const Api = () => import('@/views/vue/api');
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
        path: 'life-cycle',
        component: LifeCycle,
        meta: {
          title: '生命周期',
          icon: 'el-icon-user',
        },
      },
      {
        path: 'extend',
        component: Api,
        meta: {
          title: 'extendApi测试',
          icon: 'el-icon-user',
        },
      },
    ],
  },
];
