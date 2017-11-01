import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import EndlessTower from '@/components/EndlessTower'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/EndlessTower',
      name: 'EndlessTower',
      component: EndlessTower
    },
  ]
})
