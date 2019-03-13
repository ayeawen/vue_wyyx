//入口文件
import Vue from 'vue'
import App from './App.vue'
//适配
import 'lib-flexible/flexible'

//注册路由
import router from './router/index'
//注册store
import store from './store'
//调用mock处理请求
import './mock/mockServer'

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})