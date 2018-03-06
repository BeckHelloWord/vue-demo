// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import routes from "./config/routes";
import api from "./config/api";
import arr from "./config/add";
import utils from "./utils/index";

Vue.use(VueRouter);

//全局属性
Vue.prototype.$api = api;
Vue.prototype.$add = arr;
Vue.prototype.$utils = utils;

const router = new VueRouter({
  routes
});

/* eslint-disable no-new */
new Vue({
  router,
  el: "#app",
  render: h => h(App)
});
