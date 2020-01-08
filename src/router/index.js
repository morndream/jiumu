import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "JOMOOi5plus",
    component: () => import ("@/views/index.vue"),
    meta: {
        title: "首页",
        // requireAuth: true
    }
  },
  // {
  //   path: "/test",
  //   name: "test",
  //   component: () => import ("@/views/test.vue"),
  //   meta: {
  //       title: "测试页",
  //       // requireAuth: true
  //   }
  // },
]

const router = new VueRouter({
  routes,
  scrollBehavior(to, from,savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }

})

export default router
