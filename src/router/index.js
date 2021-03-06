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
import mineOrderlist from '@/components/mineOrderlist'
import mineOrderInfo from '@/components/mineOrderInfo'
import mineAdvice from '@/components/mineAdvice'
import mineEditinfo from '@/components/mineEditinfo'
import mineAdviceAdd from '@/components/mineAdviceAdd'
import mineAuthentication from '@/components/mineAuthentication'
import mineAuthenticationEdit from '@/components/mineAuthenticationEdit'
import mineAuthFinis from '@/components/mineAuthFinis'

//发布 by zqy
import publish from '@/components/publish/publish'
import tenant from '@/components/publish/tenant'
import secondStep from '@/components/publish/secondStep'
import publishFinis from '@/components/publish/publishFinis'
import noAuth from '@/components/publish/noAuth'



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
    	path: '/mine/type/:type',
    	name:'mine',
    	component: mine
    },
    {
      path: '/mine/editinfo',
      name:'mineEditinfo',
      component: mineEditinfo
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
      path: '/mine/advice',
      name:'mineAdvice',
      component: mineAdvice
    },
     {
      path: '/mine/adviceAdd/:type',
      name:'mineAdviceAdd',
      component: mineAdviceAdd
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
      path: '/tenant/:renttype',
      name: 'tenant',
      component: tenant
    },
    {
        path: '/secondStep/:houseid',
        name: 'secondStep',
        component: secondStep
    },
    {
        path: '/publishfinis',
        name: 'publishFinis',
        component: publishFinis
    },
    {
        path: '/noAuth/:renttype',
        name: 'noAuth',
        component: noAuth
    },
    {
        path: '/mineAuthFinis/',
        name: 'mineAuthFinis',
        component: mineAuthFinis
    }
    
  ]
})
