import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import { DropdownPlugin } from 'bootstrap-vue'
Vue.use(DropdownPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';


 
Vue.component ('v-icon',Icon);  
Vue.config.productionTip = false

new Vue({
  router,
  store,
  BootstrapVue,
  BootstrapVueIcons,
  render: h => h(App)
}).$mount('#app')
