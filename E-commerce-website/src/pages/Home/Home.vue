<template>
  <div id="home">
    <Header/>
    <Swiper/>
    <PolicyDescList/>
    <KingKongModule/>
    <SceneLightShoppingGuideModule/>
    <PersonalShop/>
    <FlashSaleModule/>
    <NewItemList/>
    <PopularItemList/>
    <CategoryHotSellModule/>
    <TagList/>
    <TopicList/>
    <ZhongChouList/>
    <CategoryModule/>



    <div class="button"></div>
  </div>
</template>

<script>
  import Header from './components/Header/Header'
  import Swiper from './components/Swiper/Swiper'
  import PolicyDescList from './components/PolicyDescList/PolicyDescList'
  import KingKongModule from './components/KingKongModule/KingKongModule'
  import SceneLightShoppingGuideModule from './components/SceneLightShoppingGuideModule/SceneLightShoppingGuideModule'
  import PersonalShop from './components/PersonalShop/PersonalShop'
  import FlashSaleModule from './components/FlashSaleModule/FlashSaleModule'
  import NewItemList from './components/NewItemList/NewItemList'
  import PopularItemList from './components/PopularItemList/PopularItemList'
  import CategoryHotSellModule from './components/CategoryHotSellModule/CategoryHotSellModule'
  import TagList from './components/TagList/TagList'
  import TopicList from './components/TopicList/TopicList'
  import ZhongChouList from './components/ZhongChouList/ZhongChouList'
  import CategoryModule from './components/CategoryModule/CategoryModule'







  export default {
    name: 'Home',
    components:{
      Header,
      Swiper,
      PolicyDescList,
      KingKongModule,
      SceneLightShoppingGuideModule,
      PersonalShop,
      FlashSaleModule,
      NewItemList,
      PopularItemList,
      CategoryHotSellModule,    //.....
      TagList,
      TopicList,        //..........
      ZhongChouList,
      CategoryModule
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #home
    background #F5F5F5
  .button
    width 100%
    height 84px
</style>
