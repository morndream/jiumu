import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 自适应
import 'amfe-flexible'
import store from './store'
//懒加载

Vue.config.productionTip = false
router.afterEach((to,from,next) => {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = document.body.scrollTop = 0;
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
