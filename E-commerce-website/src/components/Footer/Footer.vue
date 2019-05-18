<template>
  <div id="footer">
    <a href="javascript:;" :class="{on:$route.path==='/home'}" @click="goTo('/home')">
      <span class="item_icon">
        <i class="iconfont iconshouye-"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" :class="{on:$route.path==='/classify'}" @click="goTo('/classify')">
      <span class="item_icon">
        <i class="iconfont iconicon-faxian-weixuanzhong"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" :class="{on:$route.path==='/search'}" @click="goTo('/search')">
      <span class="item_icon">
        <i class="iconfont iconiconsousuo"></i>
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" :class="{on:$route.path==='/shopcart'}" @click="goTo('/shopcart')">
      <span class="item_icon">
        <i class="iconfont iconicongouwuche"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" :class="{on:$route.path==='/personal'}" @click="goTo('/personal')">
      <span class="item_icon">
        <i class="iconfont icongerenzhongxinwoderenwubiaozhuntouxianxing"></i>
      </span>
      <span>个人</span>
    </a>

  </div>
</template>

<script>
  export default {
    name: 'Footer',
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  #footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 98px
    display flex
    padding 13px 0 14px 0
    box-sizing border-box
    a
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      width 48px
      height 78px
      box-sizing border-box
      &.on
        color #b4282d
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 40px
</style>
