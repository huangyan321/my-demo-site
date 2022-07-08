import Layout from '@/layout';
const LinkedList = () =>
  import('@/views/data-structures-and-algorithms/linked-list');
const Dashboard = () => import('@/views/Dashboard');
export default [
  {
    path: '/data-structures-and-algorithms',
    name: 'data-structures',
    component: Layout,
    meta: {
      title: '数据结构与算法',
      icon: 'el-icon-user',
      cache: true,
    },
    children: [
      {
        path: 'linkedList',
        component: LinkedList,
        meta: {
          title: '链表',
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
