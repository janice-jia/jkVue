import Vue from 'vue'
import Router from 'vue-router'
import search from '@/components/search'
import index from '@/components/index'
import houseInfo from '@/components/houseInfo'
import mine from '@/components/mine'
import mineCollect from '@/components/mineCollect'
import minehouseList from '@/components/minehouseList'
import minehousePublisManage from  '@/components/minehousePublisManage'
import mineOrderlist from '@/components/mineOrderlist'
import mineOrderInfo from '@/components/mineOrderInfo';
import mineAuthentication from '@/components/mineAuthentication';
import mineAuthenticationEdit from '@/components/mineAuthenticationEdit'

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
    	path: '/mine/type/:type',
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
      path:'/mine/myorderlist',
      name:'mineOrderlist',
      component: mineOrderlist
    },
    {
      path: '/mine/mineOrderInfo/:houseid',
      name: 'mineOrderInfo',
      component:mineOrderInfo
    },
    {
      path: '/mine/authentication',
      name:'mineAuthentication',
      component: mineAuthentication
    },
    {
      path: '/mine/authentication/edit',
      name:'mineAuthenticationEdit',
      component: mineAuthenticationEdit
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
