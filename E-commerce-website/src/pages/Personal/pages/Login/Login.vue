<template>
  <div id="logon">
    <div class="content">
      <div class="logoWarp">
        <img src="../../../../common/imgs/wyyx.png" alt="">
      </div>
      <div class="btnWarp">
        <mt-button class="btn" type="danger" @click="goTo('/personal/onPhone')">
          <span class="item_icon">
            <i class="iconfont iconicon-phone"></i>
          </span>
          <a href="javascript:;" >手机号码登录</a>
        </mt-button>
        <mt-button class="btn" type="default" @click="goTo('/personal/OnMail')">
        <span class="item_icon">
          <i class="iconfont iconemail"></i>
        </span>
          <a href="javascript:;" >邮箱账号登录</a>
        </mt-button>
        <div>
          <span @click="goTo('/personal/onPhoneSignIn')">手机号快速注册</span>
          <span class="item_icon" @click="goTo('/personal/onPhoneSignIn')">
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
  </div>
</template>

<script>
  export default {
    name: 'Login',
    methods:{
      goTo(path){
        this.$router.push(path)
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #logon
    .content
      background #f2f5f4
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
              text-decoration none
          span
            .iconfont
              font-size 40px
              margin-right 16px
          a
            width 92px
            height 100%
            font-size 30px
            color white
            text-decoration none
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
