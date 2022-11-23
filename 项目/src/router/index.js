import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/',
    name: 'index',
    component: () => import('../views/Index.vue'),
    
    children:[
      {
        path: '',
        name: 'indexx',
        component: () => import('../views/Indexx.vue'),
      },
            {
              path: '/user',
              name: 'user',
              component: () => import('../views/User.vue'),
              meta:{title:'数据管理',name:'用户列表'}
            },
            {
              path: '/shop',
              name: 'shop',
              component: () => import('../views/Shop.vue'),
              meta:{title:'数据管理',name:'商家列表'}
            },
            {
              path: '/food',
              name: 'food',
              component: () => import('../views/Food.vue'),
              meta:{title:'数据管理',name:'食品列表'}
            },
            {
              path: '/order',
              name: 'order',
              component: () => import('../views/Order.vue'),
              meta:{title:'数据管理',name:'订单列表'}
            },
            {
              path: '/admin',
              name: 'admin',
              component: () => import('../views/Admin.vue'),
              meta:{title:'数据管理',name:'管理员列表'}
            },
            {
              path: '/add',
              name: 'add',
              component: () => import('../views/Add.vue'),
              meta:{title:'添加数据',name:'添加商铺'}
            },
            {
              path: '/goods',
              name: 'goods',
              component: () => import('../views/Goods.vue'),
              meta:{title:'添加数据',name:'添加商品'}
            },
            {
              path: '/visitor',
              name: 'visitor',
              component: () => import('../views/Visitor.vue'),
              meta:{title:'图表',name:'用户分布'}
            },
            {
              path: '/edit',
              name: 'edit',
              component: () => import('../views/Edit.vue'),
              meta:{title:'编辑',name:'文本编辑'}
            },
            {
              path: '/adminset',
              name: 'adminset',
              component: () => import('../views/Adminset.vue'),
              meta:{title:'设置',name:'管理员设置'}
            },
            {
              path: '/explain',
              name: 'explain',
              component: () => import('../views/Explain.vue'),
              meta:{title:'说明',name:'说明'}
            },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
