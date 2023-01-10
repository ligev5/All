import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/mylogin"
  },
  {
    path: "/mylogin",
    name: "MyLogin",
    component: () => import("../views/MyLogin.vue")
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/Home.vue"),
    children:[
      {
        path: "/user",
        name: "user",
        component: () => import("../views/user.vue")
      },
      {
        path: "/jurisdiction",
        name: "jurisdiction",
        component: () => import("../views/jurisdiction.vue")
      },
      {
        path: "/socialSecurity",
        name: "socialSecurity",
        component: () => import("../views/socialSecurity.vue")
      },
      {
        path: "/organization",
        name: "organization",
        component: () => import("../views/organization.vue")
      },
      {
        path: "/staff",
        name: "staff",
        component: () => import("../views/staff.vue")
      },
      {
        path: "/CompanySettings",
        name: "CompanySettings",
        component: () => import("../views/CompanySettings.vue")
      },
      {
        path: "/checkWork",
        name: "checkWork",
        component: () => import("../views/checkWork.vue")
      },
      {
        path: "/wages",
        name: "wages",
        component: () => import("../views/wages.vue")
      },
      {
        path: "/Approval",
        name: "Approval",
        component: () => import("../views/Approval.vue")
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
