<template>
    <div class="header">
      <span class="item_icon" @click="goTo('/home')">
        <i class="iconfont iconshouye-"></i>
      </span>
      <div class="logo"></div>
      <div class="right">
        <span class="item_icon sousuo" @click="goTo('/search')">
          <i class="iconfont iconiconsousuo"></i>
        </span>
        <span class="item_icon" @click="goTo('/shopcart')">
          <i class="iconfont iconicongouwuche"></i>
        </span>
      </div>
    </div>
</template>

<script>
  export default {
    name: "Header",
    methods:{
      goTo(path){
        this.$router.push(path)
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header
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
    .logo
      width 172px
      height 54px
      background-image url("../../../../common/imgs/logo.png")
      background-size 172px 54px
      background-repeat no-repeat
      margin 17px 130px 17px 210px
      text-align center
      float left
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
