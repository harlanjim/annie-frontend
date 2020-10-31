import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store.js';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false

import Home from "./components/Home";
import Bids from "./components/Bids";
import Login from "./components/Login";
import Profiles from "./components/Profiles";
import Jobs from "./components/Jobs";
import Register from "./components/Register";

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/profiles', component: Profiles },
  { path: '/bids', component: Bids },
  { path: '/jobs', component: Jobs }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})


Vue.use(vuetify)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
