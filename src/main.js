import Vue from "vue";
import "./plugins/vuetify.js";
import VueRouter from "vue-router";

import axios from "axios";



import App from "./App.vue";

import Todo from "./components/Todo";

import Detail from "./components/Detail";


Vue.config.productionTip = false;

Vue.use(VueRouter);

axios.defaults.baseURL = "http://localhost:8000/api/";
axios.defaults.withCredentials = true;

const routes = [
  {
    path: "/joblist",
    component: Todo,
    name: "todo",
  
  },

  {
    path: "/jobdetail/:id",
    component: Detail,
    name: "Detail",
  
  },
  {
    path: '/',
    redirect: '/joblist'
  },
  
 
];


const router = new VueRouter({
  mode: "history",
  routes,
  base: "/" 
  
});

new Vue({
  router,
  
  render: h => h(App)
}).$mount("#app");
