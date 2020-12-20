import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import EventAndMethode from '../views/EventAndMethode.vue'
import Data from '../views/Data.vue'
import Computed from '../views/Computed.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/EventAndMethode',
    name: 'EventAndMethode',
    component: EventAndMethode
  },
  {
    path: '/Data',
    name: 'Data',
    component: Data
  },
  {
    path: '/Computed',
    name: 'Computed',
    component: Computed
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
