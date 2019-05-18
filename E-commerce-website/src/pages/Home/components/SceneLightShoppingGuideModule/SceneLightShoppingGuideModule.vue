<template>
  <div>
    <div class="title">
      <img src="./imgs/SceneLightShoppingGuideModule.png" alt="">
    </div>
    <ul class="list">
      <li v-for="(item,index) in SceneLightShoppingGuideModule" :key="index">
        <p class="title">{{item.styleItem.title}}</p>
        <p class="desc">{{item.styleItem.desc}}</p>
        <img :src="item.styleItem.itemPicBeanList[0].picUrl" alt="">
        <img :src="item.styleItem.itemPicBeanList[1].picUrl" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'SceneLightShoppingGuideModule',
    computed:{
      ...mapState(['SceneLightShoppingGuideModule']),
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .title
    width 100%
    height 160px
    img
      width 100%
      height 160px
  .list
    width 694px
    height 536px
    margin-bottom 20px
    padding 10px 30px 30px 26px
    background yellow
    li
      width 323px
      height 244px
      padding 20px 0 0 20px
      margin 4px 0 0 4px
      background orange
      float left
      .title
        width 313px
        height 48px
        font-size 32px
        line-height 48px
        padding-left 10px
      .desc
        width 313px
        height 36px
        font-size 24px
        line-height 36px
        padding-left 10px
      img
        width 150px
        height 150px
        margin-right 4px
</style>
