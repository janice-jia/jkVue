import Vue from 'vue'
import Router from 'vue-router'
import search from '@/components/search'
import index from '@/components/index'
import houseInfo from '@/components/houseInfo'
import mine from '@/components/mine'
import mineCollect from '@/components/mineCollect'
import minehouseList from '@/components/minehouseList'
import minehousePublisManage from  '@/components/minehousePublisManage'
import mineOrderLook from '@/components/mineOrderLook'
//发布 by zqy
import publish from '@/components/publish/publish'
import shared from '@/components/publish/shared'
import tenant from '@/components/publish/tenant'
import secondStep from '@/components/publish/secondStep'



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
      path: '/search',
      name: 'search',
      component: search
    },
    {
    	path: '/houseInfo/:houseid',
    	name:'houseInfo',
    	component: houseInfo
    },
    {
    	path: '/mineOrderLook/:houseid',
    	name:'mineOrderLook',
    	component: mineOrderLook
    },
    {
    	path: '/mine',
    	name:'mine',
    	component: mine
    },
    {
    	path: '/mine/collect',
    	name:'mineCollect',
    	component: mineCollect
    },
    {
    	path: '/mine/minehouseList',
    	name:'minehouseList',
    	component: minehouseList
    },
    {
      path: '/mine/minehousepublishmanage/:publishType',
      name:'minehousePublisManage',
      component: minehousePublisManage
    },
    {
        path: '/publish',
        name: 'publish',
        component: publish,
    },
    {
        path: '/tenant',
        name: 'tenant',
        component: tenant
    },
    {
        path: '/secondStep/:page', //1-->tenant,2-->shared
        name: 'secondStep',
        component: secondStep
    },
    {
        path: '/shared',
        name: 'shared',
        component: shared
    },
  ]
})
