import { createRouter, Router, RouteRecordRaw, createWebHashHistory } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      name: '首页',
      component: () => import('../views/home/index.tsx'),
    },
];

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
