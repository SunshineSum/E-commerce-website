<template>
  <div id="onEmailSignIn">
    <div class="warp">
      <div class="form">
        <div class="name">
          <input class="leftBtn" type="text" placeholder="    6-18位字母数字组合" minlength="8" maxlength="18" v-model="text" name="yhm" v-validate="{required: true}">
          <!--<button class="leftBtn">6-18位字母数字组合</button>-->
          <button class="rightBtn">
            <p>@163.com</p>
            <div>
              <span class="item_icon">
              <i class="iconfont iconxiajiantou"></i>
            </span>
            </div>
          </button>
        </div>
        <p style="color: red;" v-show="errors.has('yhm')">{{ errors.first('yhm') }}</p>
        <div class="pwd">
          <div class="pwdBtn">
            <input class="text" type="text" placeholder="    6-18位字母数字字符组合密码" minlength="8" maxlength="18" v-model="code" name="pwd" v-validate="{required: true}"/>
            <p class="icon">
              <span class="item_icon">
                <i class="iconfont iconyanjing"></i>
              </span>
            </p>
          </div>
        </div>
        <p style="color: red;" v-show="errors.has('pwd')">{{ errors.first('pwd') }}</p>
        <div class="verify">
          <button class="verifyBtn">
            <div>
              <span class="item_icon">
                <i class="iconfont icondianji"></i>
              </span>
            </div>
            <p>点击进行验证</p>
          </button>
        </div>
        <mt-button class="btn" type="danger" @click="login">
          <a href="javascript:;" >注册</a>
        </mt-button>
        <div class="choose">
          <input type="checkbox">
          <span>用户注册即代表同意</span>
          <span>《服务条款》</span>
          <span>和</span>
          <span>《网易隐私政策》</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui'
  export default {
    name: 'OnEmailSignIn',
    data(){
      return{
        text:'',
        code:'',
      }
    },
    methods:{
      async login(){
        console.log(success,'xxx')
        let success = await this.$validator.validateAll(['yhm','pwd'])
        if(success){
          MessageBox.alert('登录成功')
        }else {
          MessageBox.alert('邮箱或密码不正确')
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #onEmailSignIn
    margin 0
    padding 0
    .warp
      /*width 650px*/
      /*height 600px*/
      margin 0 50px
      padding 70px 0 56px
      /*background yellow*/
      .form
        width 650px
        height 372px
        /*background royalblue*/
        .name
          position relative
          width 100%
          height 92px
          /*background purple*/
          padding 36px 0 0
          .leftBtn
            width 356px
            height 88px
            line-height 88px
            font-size 28px
            color rgba(0,0,0,.5)
            border 1px solid #d0d0d0
            outline none
          .rightBtn
            position absolute
            right 0
            bottom 5px
            width 260px
            height 88px
            p
              float left
              font-size 28px
              color #333
              margin-top 25px
            div
              float right
              margin-top 10px
              span
                font-size 28px
              .iconfont
                font-size 60px
                color rgba(0,0,0,.5)

        .pwd
          width 100%
          height 92px
          /*background yellow*/
          padding 36px 0 0
          .pwdBtn
            width 100%
            height 92px
            border 1px solid #d0d0d0
            .text
              margin-left 5px
              margin-top 2px
              width 75%
              height 85px
              float left
              font-size 28px
              color rgba(0,0,0,.5)
              border 0
              outline none
            .icon
              float right
              margin-top 10px
              margin-right 30px
              span
                font-size 28px
              .iconfont
                font-size 60px
                color rgba(0,0,0,.5)
        .verify
          width 100%
          height 80px
          /*background blueviolet*/
          padding 36px 0 0
          .verifyBtn
            width 100%
            height 80px
            p
              float right
              font-size 28px
              color #333
              margin-top 15px
              margin-right 150px
            div
              float left
              margin-left 200px
              margin-top 10px
              span
                font-size 28px
              .iconfont
                font-size 48px
                color deepskyblue
        .btn
          width 100%
          height 90px
          margin 25px auto 32px
          display flex
          justify-content space-around
          line-height 90px
          background #b4282d
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
        .choose
          display flex
          align-items space-between
          height 40px
          line-height 40px

          input
            width 40px
            height 40px
            background-color #fff
            /*-webkit-appearance none*/
            border 1px solid #c9c9c9
            border-radius 2px
            outline none
          span
            font-size 24px
            margin-top 5px
            &:nth-child(2n+1)
              color #007AFF
</style>
