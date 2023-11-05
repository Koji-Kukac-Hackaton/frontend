import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ReservationView from '../views/ReservationView.vue'
import ProfileView from '../views/ProfileView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/reserve',
      name: 'reserve',
      component: ReservationView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/user-profile',
      name: 'user-profile',
      component: ProfileView
    }
  ]
})

export default router
