import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Testview from '../views/Testview.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Test',
    name: 'Test',
    component: Testview
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
