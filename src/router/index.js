import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main/main.vue'
import customerlist from '@/components/customer/customerlist/customerlist.vue'
import customerinfo from '@/components/customer/customerinfo/customerinfo.vue'
import config from '@/components/config/config.vue'
import businessSystemList from '@/components/businessSystem/businessSystemList/businessSystemList.vue'
import businessSystemInfo from '@/components/businessSystem/businessSystemInfo/businessSystemInfo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'main',
    component: main
  }, {
    path: '/customerlist',
    name: 'customerlist',
    component: customerlist
  }, {
    path: '/customerinfo',
    name: 'customerinfo',
    component: customerinfo
  }, {
    path: '/config',
    name: 'config',
    component: config
  }, {
    path: '/businessSystemList',
    name: 'businessSystemList',
    component: businessSystemList
  }, {
    path: '/businessSystemInfo',
    name: 'businessSystemInfo',
    component: businessSystemInfo
  }]
})
