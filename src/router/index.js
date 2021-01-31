import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import dormitoryCheck from '@/components/dormitoryCheck'
import dormitoryReport from '@/components/dormitoryReport'
import dormitoryReport1 from '@/components/dormitoryReport1'


Vue.use(Router)

export default new Router({
  // mode: 'history',
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
    },
    {
      path: '/dormitoryReport',
      name:'dormitoryReport',
      component: dormitoryReport
    },
    {
      path: '/dormitoryReport1',
      name:'dormitoryReport1',
      component: dormitoryReport1
    }
    
  ]
})
