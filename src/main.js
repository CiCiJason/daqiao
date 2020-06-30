import "babel-polyfill"
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes'

//bootstrap的css样式在style.css中引入了，因为要修改bootstrap的部分变量
import './assets/scss/style.scss'

//引入bootstarp的js
import 'jquery/dist/jquery.js'
import 'bootstrap/dist/js/bootstrap.js'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')