import Vue from 'vue'
import Router from 'vue-router'
import navtabs from '@/components/navtabs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'navtabs',
      component: navtabs
    }
  ]
})
