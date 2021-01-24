// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// import 'lib-flexible/flexible'
// import VueScroller from 'vue-scroller'

// 引入全部组件
import Mint from 'mint-ui';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import global_ from './global'//引用文件
Vue.prototype.GLOBAL = global_//挂载到Vue实例上面

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.http.options.emulateHTTP = true;
Vue.http.options.emulateJSON = true;
// Vue.use(VueScroller)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
