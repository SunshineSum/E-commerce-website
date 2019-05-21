<template>
  <div id="personal">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
  import Header from './components/Header/Header'
  export default {
    name: 'Personal',
    data(){
      return{
        loggingStatus:0,    //登录状态：0-初始状态，1-手机号登录状态，2-邮箱账号登录
      }
    },
    methods:{
      goTo(path){
        this.$router.push(path)
      }
    },
    components:{
      Header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
