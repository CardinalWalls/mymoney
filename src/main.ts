import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Nav from "./components/Nav.vue";
import Layout from '@/components/Layout.vue';

Vue.config.productionTip = false

Vue.component('Nav', Nav)
Vue.component('Layout',Layout)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
