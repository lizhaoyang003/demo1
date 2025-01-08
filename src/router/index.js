import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/box',
      name: 'box',
      component: () => import('../views/boxView.vue'),
      props: true
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/gm',
      name: 'gm',
      component: () => import('../views/gmView.vue')
    },
    {
      path: '/gm1',
      name: 'gm1',
      component: () => import('../views/gmView1.vue')
    },
    {
      path: '/gm2',
      name: 'gm2',
      component: () => import('../views/gmView2.vue')
    },
    {
      path: '/gm3',
      name: 'gm3',
      component: () => import('../views/basic.vue')
    }
  ]
});

export default router;
