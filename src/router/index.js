import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import VueCookies from 'vue-cookies'
import VueQrcodeReader from 'vue-qrcode-reader'
import Hello from '@/components/Hello'
import Dashboard from '@/components/Dashboard'
import * as Blockstack from 'blockstack'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(VueCookies)
Vue.use(Blockstack)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})
