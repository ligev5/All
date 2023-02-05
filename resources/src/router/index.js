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
				/**公司设置 */
      },
			{
        path: '/permission',
        name: 'permission',
        component: () => import('../views/permission/Permission.vue')
				/**公司设置 */
      },
			{
        path: '/social_securitys',
        name: 'social_securitys',
        component: () => import('../views/social_securitys/Social_securitys.vue')
				/**社保 */
      },
			{
        path: '/approvals',
        name: 'approvals',
        component: () => import('../views/approvals/Approvals.vue')
				/**审批 */
      },
			{
        path: '/attendances',
        name: 'attendances',
        component: () => import('../views/attendances/Attendances.vue')
				/**考勤 */
      },
			{
        path: '/salarys',
        name: 'salarys',
        component: () => import('../views/salarys/Salarys.vue')
				/**工资 */
      },
			{
        path: '/emdetali',
        name: 'emdetali',
        component: () => import('../views/employees/Emdetali.vue')
				/**工资 */
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
