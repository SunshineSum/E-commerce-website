<template>
  <div id="home">
    <Header/>
    <Swiper/>
    <PolicyDescList/>
    <KingKongModule/>
    <SceneLightShoppingGuideModule/>
    <PersonalShop/>
  </div>
</template>

<script>
  import Header from './components/Header/Header'
  import Swiper from './components/Swiper/Swiper'
  import PolicyDescList from './components/PolicyDescList/PolicyDescList'
  import KingKongModule from './components/KingKongModule/KingKongModule'
  import SceneLightShoppingGuideModule from './components/SceneLightShoppingGuideModule/SceneLightShoppingGuideModule'
  import PersonalShop from './components/PersonalShop/PersonalShop'
  export default {
    name: 'Home',
    components:{
      Header,
      Swiper,
      PolicyDescList,
      KingKongModule,
      SceneLightShoppingGuideModule,
      PersonalShop
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
