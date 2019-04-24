import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main/main.vue'
import customerList from '@/components/customer/customerlist/customerlist.vue'
import customerInfo from '@/components/customer/customerinfo/customerinfo.vue'
import config from '@/components/config/config.vue'
import businessSystemList from '@/components/businessSystem/businessSystemList/businessSystemList.vue'
import businessSystemInfo from '@/components/businessSystem/businessSystemInfo/businessSystemInfo.vue'
import candidateInfo from '@/components/candidate/candidateInfo/candidateInfo.vue'
import candidateList from '@/components/candidate/candidateList/candidateList.vue'
import questionInfo from '@/components/exam/questionInfo/questionInfo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'main',
    component: main
  }, {
    path: '/customerList',
    name: 'customerList',
    component: customerList
  }, {
    path: '/customerInfo',
    name: 'customerInfo',
    component: customerInfo
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
  }, {
    path: '/candidateInfo',
    name: 'candidateInfo',
    component: candidateInfo
  }, {
    path: '/candidateList',
    name: 'candidateList',
    component: candidateList
  }, {
    path: '/questionInfo',
    name: 'questionInfo',
    component: questionInfo
  }]
})
