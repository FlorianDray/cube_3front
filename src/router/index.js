import { createRouter, createWebHashHistory } from 'vue-router'
import ChatView from '../views/ChatView.vue'

const routes = [
  {
    path: '/',
<<<<<<< HEAD
    name: 'home',
    component: HomeView
  },
  {
    path: '/Test',
    name: 'Test',
    component: Testview
  },

=======
    name: 'chat',
    component: ChatView
  }
>>>>>>> ca62f9ffcbb46715dbb02e357c2a121568d172ac
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
