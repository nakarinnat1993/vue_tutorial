import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import VModel from '../views/VModel.vue'
import EventAndMethode from '../views/EventAndMethode.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/VModel',
    name: 'VModel',
    component: VModel
  },
  {
    path: '/EventAndMethode',
    name: 'EventAndMethode',
    component: EventAndMethode
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
