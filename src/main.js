// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './config'
import api from './config/api'

Vue.use(VueRouter)

Vue.prototype.$api=api;

const router = new VueRouter({
  routes
})
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: (h) => h(App)
})
