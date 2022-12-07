import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import http from '@/untils/httpRequse'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/commom.css' //引入创建的样式
Vue.config.productionTip = false
Vue.prototype.$http = http
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
