import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VCharts from 'v-charts'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.prototype.$axios = axios;
 
Vue.use(VueAxios, axios)

Vue.use(VCharts)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
