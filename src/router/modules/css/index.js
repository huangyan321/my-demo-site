import Layout from '@/layout';
const Position = () => import('@/views/css/position');
export default [
  {
    path: '/css',
    name: 'CSS',
    component: Layout,
    meta: {
      title: 'CSS',
      icon: 'el-icon-user',
      cache: true,
    },
    children: [
      {
        path: 'position',
        component: Position,
        meta: {
          title: '定位',
          icon: 'el-icon-user',
        },
      },
      {
        path: 'extend',
        component: Position,
        meta: {
          title: 'extendApi测试',
          icon: 'el-icon-user',
        },
      },
    ],
  },
];
