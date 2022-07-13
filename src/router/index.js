import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/players',
    name: 'players',
    component: () => import('../views/Players.vue')
  },
  {
    path: '/CristianoRonaldo',
    name: 'CristianoRonaldo',
    component: () => import('../components/CristianoRonaldo.vue')
  },
  {
    path: '/FrenkiedeJong',
    name: 'FrenkiedeJong',
    component: () => import('../components/FrenkiedeJong.vue')
  },
  {
    path: '/HarryMaguire',
    name: 'HarryMaguire',
    component: () => import('../components/HarryMaguire.vue')
  },
  {
    path: '/RomeluLukaku',
    name: 'RomeluLukaku',
    component: () => import('../components/RomeluLukaku.vue')
  },
  {
    path: '/TimoWerner',
    name: 'TimoWerner',
    component: () => import('../components/TimoWerner.vue')
  },
  {
    path: '/VivianneMiedema',
    name: 'VivianneMiedema',
    component: () => import('../components/VivianneMiedema.vue')
  },
  {
    path: '/MartaVieiradaSilva',
    name: 'MartaVieiradaSilva',
    component: () => import('../components/MartaVieiradaSilva.vue')
  },
  {
    path: '/SamKerr',
    name: 'SamKerr',
    component: () => import('../components/SamKerr.vue')
  },
  {
    path: '/MapiLeon',
    name: 'MapiLeon',
    component: () => import('../components/MapiLeon.vue')
  },
  {
    path: '/SakinaKarchaoui',
    name: 'SakinaKarchaoui',
    component: () => import('../components/SakinaKarchaoui.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
