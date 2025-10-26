import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/Home/Home.vue')
  },
  {
    path: '/services',
    component: () => import('@/views/Marketing/Services.vue')
  },
  {
    path: '/services/marketing-strategy',
    component: () => import('@/views/Marketing/MarketingStrategy.vue')
  },
  {
    path: '/company',
    component: () => import('@/views/Company/Company.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;