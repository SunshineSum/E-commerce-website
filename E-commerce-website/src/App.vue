<template>
  <div id="app">
    <router-view/>
    <Footer v-show="$route.meta.isShowFoot"/>
  </div>
</template>

<script>
import {homeData} from './api/index'
export default {
  name: 'App',
  mounted () {
    this.$store.dispatch('getHomeData')
  }
}
</script>

<style>

</style>
