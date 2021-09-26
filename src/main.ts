import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Nav from "./components/Nav.vue";

Vue.config.productionTip = false

Vue.component('Nav', Nav)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')