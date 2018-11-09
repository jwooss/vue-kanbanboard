import Vue from 'vue'
import App from './App.vue'

const Login = { template: '<div>Login page</div>'}

const routes = {
  '/': App,
  '/Login': Login
}

new Vue({
  el: '#app',
  computed: {
    VueComponent() {
      return routes[window.location.pathname] ||
        { template: '<div>404 not found</div>'}
    }
  },
  render(h) {
    return h(this.VueComponent)
  }
})
