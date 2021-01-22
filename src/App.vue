<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
// import indexJs from './js/index'
export default {
  name: 'App',
  mounted(){
      // indexJs.flexible(750,750);
  }
}
</script>


<style lang="less" >
  @import './styles/index';
</style>

