import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BerandaView from '../views/beranda/BerandaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'beranda',
      component: BerandaView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router
