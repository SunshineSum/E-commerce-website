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
        <span class="item_icon sousuo">
          <i class="iconfont iconiconsousuo"></i>
        </span>
        <span class="item_icon">
          <i class="iconfont iconicongouwuche"></i>
        </span>
      </div>
    </header>
  </div>
</template>

<script>
  export default {
    name: 'Search'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  #search
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
        margin 17px 140px
        text-align center
        float left
        span
          margin 0 16px
          font-size 28px
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
</style>
