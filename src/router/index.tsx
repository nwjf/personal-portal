import { createRouter, Router, RouteRecordRaw, createWebHashHistory } from 'vue-router';
import { toRefs } from 'vue';
import { useConfigStore } from '../store/config';

const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      name: '首页',
      component: () => import('../views/home/index.vue'),
    },
];

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const { getConfigLocal } = useConfigStore();
  const { isGetLocal } = toRefs(useConfigStore());
  if (!isGetLocal.value) getConfigLocal();
  next();
})

export default router;
