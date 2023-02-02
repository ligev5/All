import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  /**重定向 */
  { path: '/', redirect: '/Login' },

  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
    /**登录页面 */
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('../views/Index.vue'),
    /**全局页面 */
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/dashboard/dashboard.vue')
				/**首页 */
      },
			{
        path: '/departments',
        name: 'departments',
        component: () => import('../views/departments/departments.vue')
				/**组织架构 */
      },
			{
        path: '/employees',
        name: 'employees',
        component: () => import('../views/employees/employees.vue')
				/**员工 */
      },
			{
        path: '/setting',
        name: 'setting',
        component: () => import('../views/setting/Setting.vue')
				/**员工 */
      },

    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
