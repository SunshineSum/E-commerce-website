<template>
  <div id="search">
    <header class="header">
      <span class="item_icon" @click="goTo('/home')">
        <i class="iconfont iconshouye-"></i>
      </span>
      <div class="name">
        <span class="on">发现</span>
        <span>甄选家</span>
      </div>
      <div class="right">
        <span class="item_icon sousuo" @click="goTo('/search')">
          <i class="iconfont iconiconsousuo"></i>
        </span>
        <span class="item_icon" @click="goTo('/shopcart')">
          <i class="iconfont iconicongouwuche"></i>
        </span>
      </div>
    </header>
    <div class="nav">
      <div class="wrapper">
        <ul class="content">
          <li v-for="(item,index) in categoryL1List" :key="index">{{item.name}}</li>
        </ul>
      </div>
    </div>
    <div class="contentWarp">
      <div class="content" v-for="(item,index) in categoryL1List" :key="index">
        <div class="name">
          <img :src="item.bannerUrl" alt="">
          <span>{{item.name}}</span>
        </div>
        <div class="title">新年必备开运红，小红门、招财猫等低至49元</div>
        <div class="pic">
          <img :src="item.wapBannerUrl" alt="">
        </div>
        <div class="rcount">
          <span class="item_icon">
            <i class="iconfont iconiconfontfaxian1"></i>
          </span>
          <span>888w人看过</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'Search',
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    },
    computed: {
      ...mapState(['categoryData']),
      categoryL1List(){
        return this.categoryData.categoryL1List
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  #search
    background #F5F5F5
    .header
      bottom-border-1px(#e4e4e4)
      width 100%
      height 88px
      /*background yellow*/
      background #fafafa
      padding 0 16px 0 24px
      box-sizing border-box
      line-height 88px
      display flex
      align-items center
      .item_icon
        float left
        .iconfont
          font-size 48px
      .name
        width 320px
        height 100px
        line-height 100px
        margin 17px 120px 17px 160px
        text-align center
        float left
        display flex
        align-items center
        img
          vertical-align top
        span
          margin 0 16px
          font-size 28px
          vertical-align top
          &.on
            font-size 40px
            color #b4282d
      .right
        width 148px
        height 64px
        line-height 64px
        /*background orange*/
        float right
        .item_icon
          .iconfont
            font-size 48px
          &.sousuo
            margin-right 20px
    .nav
      bottom-border-1px(#e4e4e4)
      width 100%
      height 71px
      background #d9d9d9
      /*background yellow*/
      .wrapper
        position relative
        z-index 5
        height 71px
        width 100%
        /*background yellow*/
        display flex
        overflow hidden
        .content
          display flex
          height 71px
          line-height 60px

          /*background orange*/
          li
            float left
            white-space nowrap
            padding 4px 8px 4px 8px
            margin 0 20px
            font-size 28px
            &:nth-child(1)
              margin-left 0
    .contentWarp
      .content
        width 690px
        height 605px
        padding 36px 30px 36px 30px
        margin 20px 0
        background white
        /*background royalblue*/
        .name
          width 690px
          height 54px
          margin-bottom 24px
          line-height 54px
          font-size 28px
          img
            width 54px
            height 54px
            border 1px solid #d9d9d9
            border-radius 50%
        .title
          width 690px
          height 104px
          margin -8px 0 16px 0
          line-height 104px
          font-size 36px
        .pic
          width 690px
          height 376px
          margin-bottom 20px
          img
            width 690px
            height 376px
        .rcount
          width 690px
          height 34px
          margin-bottom 18px 0 -16px 0
          font-size 24px
          .iconfont
            font-size 24px
</style>
