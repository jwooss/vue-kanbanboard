import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './../App.vue'

Vue.use(VueRouter);

const Login = { template: '<div>Login page</div>' };
const NotFound = { template: '<div>404 not found</div>' };

const router = new VueRouter({
  mode  : 'history',
  routes: [
    { path: '/', component: App },
    { path: '/login', component: Login },
    { path: '*', component: NotFound },
  ]
})

export default router
