<template>
  <div id="app">
    <router-view/>
    <Footer class="footer" v-show="$route.meta.isShowFoot"/>
  </div>
</template>

<script>
import {homeData} from './api/index'
export default {
  name: 'App',
  mounted () {
    this.$store.dispatch('getHomeData')
    this.$store.dispatch('getCategoryData')
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    /*overflow-x hidden*/
</style>
