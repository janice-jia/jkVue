// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// import 'lib-flexible/flexible'
// import VueScroller from 'vue-scroller'


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
// Vue.use(VueScroller)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
