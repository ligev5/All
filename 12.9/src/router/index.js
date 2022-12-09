import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/LoginView'
  },
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
    path: '/LoginView',
    name: 'LoginView',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/index.vue'),
    children: [
      {
        path: '/users',
        name: 'users',
        component: () => import('../views/UsersView.vue')
      },
      {
        path: '/roles',
        name: 'roles',
        component: () => import('../views/RolesView.vue')
      },
      {
        path: '/rights',
        name: 'rights',
        component: () => import('../views/RightsView.vue')
      },
      {
        path: '/goods',
        name: 'goods',
        component: () => import('../views/GoodsView.vue'),
        children: [
          {
            path: '/add',
            name: 'add',
            component: () => import('../views/AddView.vue')
          }
        ]
      },
      {
        path: '/params',
        name: 'params',
        component: () => import('../views/ParamsView.vue')
      },
      {
        path: '/categories',
        name: 'categories',
        component: () => import('../views/CategoriesView.vue')
      },
      {
        path: '/orders',
        name: 'orders',
        component: () => import('../views/OrdersView.vue')
      },
      {
        path: '/reports',
        name: 'reports',
        component: () => import('../views/ReportsView.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
