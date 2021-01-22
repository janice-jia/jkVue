import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import dormitoryCheck from '@/components/dormitoryCheck'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
    	path: '/dormitoryCheck',
    	name:'dormitoryCheck',
    	component: dormitoryCheck
    }
    
  ]
})
