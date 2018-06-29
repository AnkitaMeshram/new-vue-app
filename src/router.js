import Vue from 'vue'
import Router from 'vue-router'
import Overview from './components/Overview.vue'
import Account from './components/Account.vue'
import Investment from './components/Investment.vue'
import Info from './components/Info.vue'
import Loan from './components/Loans.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'overview',
      component: Overview
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    },
    {
      path: '/investment',
      name: 'investment',
      component: Investment
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    },
    {
      path: '/loan',
      name: 'loan',
      component: Loan
    }
  ]
})