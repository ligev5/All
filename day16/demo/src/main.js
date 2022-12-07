import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Select, Input,Checkbox,Radio,Switch,DatePicker,TimePicker } from 'element-ui'
import http from "../untils/request"
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
Vue.prototype.$http=http
Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
Vue.use(Input,Checkbox,Radio,Switch,DatePicker,TimePicker  ,Button, Select )
// Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
