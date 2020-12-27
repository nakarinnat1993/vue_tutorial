import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import EventAndMethode from '../views/EventAndMethode.vue'
import Data from '../views/Data.vue'
import Computed from '../views/Computed.vue'
import Binding from '../views/Binding.vue'
import Form from '../views/Form.vue'
import Slot from '../views/Slot.vue'
import Condition from '../views/Condition.vue'
import Loop from '../views/Loop.vue'
import LifecycleHooks from '../views/LifecycleHooks.vue'
import State from '../views/VariableAndState.vue'
import Ref from '../views/Ref.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/eventAndMethode',
    name: 'EventAndMethode',
    component: EventAndMethode
  },
  {
    path: '/data',
    name: 'Data',
    component: Data
  },
  {
    path: '/computed',
    name: 'Computed',
    component: Computed
  },
  {
    path: '/binding',
    name: 'Binding',
    component: Binding
  },
  {
    path: '/form',
    name: 'Form',
    component: Form
  },
  {
    path: '/slot',
    name: 'Slot',
    component: Slot
  },
  {
    path: '/condition',
    name: 'Condition',
    component: Condition
  },
  {
    path: '/loop',
    name: 'Loop',
    component: Loop
  },
  {
    path: '/lifecycle',
    name: 'LifecycleHooks',
    component: LifecycleHooks
  },
  {
    path: '/state',
    name: 'State',
    component: State
  },
  {
    path: '/ref',
    name: 'Ref',
    component: Ref
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
