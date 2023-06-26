import Vue from 'vue'
import App from './App.vue'
import store from './store'


import router from './router'
import './assets/tailwind.css'
import './assets/__vars.scss'
import './app.css'

export const EventBus = new Vue();

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
