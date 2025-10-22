import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/HomePage/HomePage.vue')
  },
  {
    path: '/services-page',
    component: () => import('@/views/Marketing/ServicesPage.vue')
  },
  {
    path: '/services-page/marketing-strategy',
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
