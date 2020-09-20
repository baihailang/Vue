import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Show from '@/components/show'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/show',
      component: Show
    }
  ]
})
