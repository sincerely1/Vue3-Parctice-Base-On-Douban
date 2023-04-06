import { createRouter, createWebHistory } from 'vue-router'
import home from "../views/home/home.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: home, name: 'home' },
    { path: '/login', component: () => import('../views/login/login.vue') },
    { path: '/detail', component: () => import('../views/detail/detail.vue') },
    { path: '/search', component:() => import('../views/search/search.vue') },
    { path: '/publish', component:() => import('../views/publish/publish.vue') },
  ]
})

export default router
