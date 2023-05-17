import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import myapps from '../views/myapps.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/myapps',
    name: 'myapps',
   component:myapps
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
