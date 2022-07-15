import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Players from '../views/Players.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/players',
    name: 'Players',
    component: Players
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/female',
    name: 'Female',
    component: () => import('../views/Female.vue')
  },
  {
    path: '/male',
    name: 'Male',
    component: () => import('../views/Male.vue')
  },
  {
    path: '/top',
    name: 'Top',
    component: () => import('../views/Top.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
