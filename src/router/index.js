import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import main from '@/components/main/main.vue'
import customer from '@/components/customer/customer.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'main',
    component: main
  }, {
    path: '/customer',
    name: 'customer',
    component: customer
  }]
})
