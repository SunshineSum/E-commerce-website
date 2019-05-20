<template>
  <div id="categoryHotSellModule">
    <div class="title">
      <div class="titleName">类目热销榜</div>
    </div>
    <div class="content">
      <div class="top">
        <div class="item left">
          <p>热销榜</p>
          <img v-if="categoryHotSellModule[0]" :src="categoryHotSellModule[0].picUrl" alt="">
        </div>
        <div class="item right">
          <p>好评榜</p>
          <img v-if="categoryHotSellModule[1]" :src="categoryHotSellModule[1].picUrl" alt="">
        </div>
      </div>
      <ul class="bottom">
        <li v-if="item" v-for="(item,index) in categoryHotSellModuleNew" :key="index">
          <p>{{item.categoryName}}</p>
          <img :src="item.picUrl" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'CategoryHotSellModule',
    computed: {
      ...mapState(['categoryHotSellModule']),
      categoryHotSellModuleNew(){
        return this.categoryHotSellModule.slice(2,10)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #categoryHotSellModule
    width 750px
    height 710px
    background white
    /*background yellow*/
    margin-bottom 20px
    .title
      width 690px
      height 100px
      padding 0 30px
      /*background red*/
      display flex
      justify-content space-between
      .titleName
        width 289.5px
        height 100px
        /*background yellow*/
        font-size 32px
        line-height 100px
    .content
      width 700px
      height 590px
      padding 0 20px 20px 30px
      /*background purple*/
      .top
        display flex
        .item
          position relative
          width 340px
          height 200px
          margin  0 10px 10px 0
          /*background orange*/
          &.left
            background #F9F3E4
          &.right
            background #EBEFF6
          p
            margin-top 66px
            padding-left 24px
            font-size 28px
            float left
            &::after
              content ''
              width 48px
              height 4px
              position absolute
              left 24px
              top 112px
              background black
          img
            width 200px
            height 200px
            float right

      .bottom
        li
          width 165px
          height 180px
          margin 0 10px 10px 0
          /*background royalblue*/
          float left
          background #f5f5f5
          p
            width 165px
            height 36px
            margin-top 10px
            line-height 36px
            text-align center
            font-size 24px
          img
            width 120px
            height 120px
            margin 2px 0 0 23px
</style>
