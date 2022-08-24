import Layout from '@/layout';
const Event = () => import('@/views/javascript/event');
export default [
  {
    path: '/javascript',
    name: 'Javascript',
    component: Layout,
    meta: {
      title: 'Javascript',
      icon: 'el-icon-user',
      cache: true,
    },
    children: [
      {
        path: 'event',
        component: Event,
        meta: {
          title: '事件',
          icon: 'el-icon-user',
        },
      },
      {
        path: 'extend',
        component: Event,
        meta: {
          title: 'extendApi测试',
          icon: 'el-icon-user',
        },
      },
    ],
  },
];
