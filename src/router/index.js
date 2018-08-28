import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => require(['@/components/login'],resolve)
    },{
      path: '/authorization',
      name: 'authorization',
      component: resolve => require(['@/components/authorization'],resolve)
    }
  ]
})
