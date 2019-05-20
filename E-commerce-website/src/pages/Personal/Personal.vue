<template>
  <div id="personal">
    <header class="header">
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
    </header>
    <div class="logoWarp">
      <img src="../../common/imgs/wyyx.png" alt="">
    </div>
    <div class="btnWarp">
      <mt-button class="btn" type="danger" @click="goTo('/personal')">
        <span class="item_icon">
          <i class="iconfont iconicon-phone"></i>
        </span>
        <a href="javascript:;" >手机号码登录</a>
      </mt-button>
      <mt-button class="btn" type="default" @click="goTo('/personal')">
        <span class="item_icon">
          <i class="iconfont iconemail"></i>
        </span>
        <a href="javascript:;" >邮箱账号登录</a>
      </mt-button>
      <div>
        <span>手机号快速注册</span>
        <span class="item_icon">
          <i class="iconfont iconicon_jiangtoul_right"></i>
        </span>
      </div>
    </div>
    <div class="thirdWarp">
      <div class="itemWarp">
        <span class="item_icon">
          <i class="iconfont iconweixin"></i>
        </span>
        <span>微信</span>
      </div>
      <div class="itemWarp">
        <span class="item_icon">
          <i class="iconfont iconqq"></i>
        </span>
        <span>QQ</span>
      </div>
      <div class="itemWarp">
        <span class="item_icon">
          <i class="iconfont iconweibo"></i>
        </span>
        <span>微博</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Personal',
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #personal
    position relative
    height 100%
    background #F2F5F4
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
        background-image url("../../common/imgs/logo.png")
        background-size 172px 54px
        background-repeat no-repeat
        margin 17px 170px
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
    .logoWarp
      width 100%
      height 90px
      /*background royalblue*/
      padding 160px 0
      line-height 90px
      text-align center
      img
        width 268px
        height 90px
    .btnWarp
      width 670px
      height 292px
      /*background yellow*/
      padding 0 40px
      margin-bottom 205px
      .btn
        width 95%
        height 90px
        margin 0 auto 32px
        display flex
        justify-content space-around
        line-height 90px
        &:first-child
          background #b4282d
        &:nth-child(2)
          color #b4282d
          border 1px solid #b4282d
          a
            color #b4282d
        span
          .iconfont
            font-size 40px
            margin-right 16px
        a
          width 92px
          height 100%
          font-size 30px
          color white
      div
        width 95%
        height 40px
        line-height 40px
        font-size 28px
        text-align center
        span
          .iconfont
            font-size 28px
    .thirdWarp
      width 100%
      height 340px
      background #F2F5F4
      padding 100px 100px
      color #7F7F7F
      .itemWarp
        float left
        padding 0 40px
        border-right 1px solid #979797
        font-size 28px
        &:last-child
          border-right 0
        span
          .iconfont
            font-size 40px
</style>
