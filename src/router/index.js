import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ClickAndVModel from '../views/ClickAndVModel.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ClickAndVModel',
    name: 'ClickAndVModel',
    component: ClickAndVModel
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
