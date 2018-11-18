<template>
    <!-- 底部导航 start-->
    <div class="jk-nav jkFlex">
        <div v-bind:class="[routeName=='index' ? 'jk-nav-item jkFlexItem nav-hover' : 'jk-nav-item jkFlexItem']">
            <router-link class="houseLink" :to="{name: 'index'}"></router-link>
            <div class="jk-nav-item-icon nav-icon01"></div>
            <p>首页</p>
        </div>
        <div v-bind:class="[routeName=='publish' ? 'jk-nav-item jkFlexItem nav-hover' : 'jk-nav-item jkFlexItem']">
            <router-link class="houseLink" :to="{name: 'publish'}"></router-link>
            <div class="jk-nav-item-icon nav-icon02"></div>
            <p>发布</p>
        </div>
        <div  v-bind:class="[routeName=='mine' ? 'jk-nav-item jkFlexItem nav-hover' : 'jk-nav-item jkFlexItem']">
            <router-link class="houseLink" :to="{name: 'mine', params: {type: '1'}}"></router-link>
            <div class="jk-nav-item-icon nav-icon03"></div>
            <p>我</p>
        </div>
    </div>
    <!-- 底部导航 end-->
</template>

<script>
export default {
    name: 'bottomCom',
    data () {
      return {
          routeName: this.$route.name
      }
    }
}
</script>
