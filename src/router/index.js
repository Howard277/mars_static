import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import main from '@/components/main/main.vue'
import customerinfo from '@/components/customer/customer.vue'
import config from '@/components/config/config.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'main',
    component: main
  }, {
    path: '/customerinfo',
    name: 'customerinfo',
    component: customerinfo
  }, {
    path: '/config',
    name: 'config',
    component: config
  }]
})
