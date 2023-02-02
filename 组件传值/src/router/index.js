import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

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
    path: '/ref',
    name: 'ref',
    component: () => import('../views/Ref.vue')
  },
  {
    path: '/log',
    name: 'log',
    component: () => import('../views/Log.vue')
  },
  {
    path: '/parent',
    name: 'parent',
    component: () => import('../views/Parent.vue')
  },
  {
    path: '/pro',
    name: 'pro',
    component: () => import('../views/Pro.vue')
  },
  {
    path: '/mod',
    name: 'mod',
    component: () => import('../views/Mod.vue')
  },
  {
    path: '/attrs',
    name: 'attrs',
    component: () => import('../views/Attrs.vue')
  },
  {
    path: '/vx',
    name: 'vx',
    component: () => import('../views/Vx.vue')
  },
  {
    path: '/event',
    name: 'event',
    component: () => import('../views/Event.vue')
  },
 
]

const router = new VueRouter({
  routes
})

export default router
