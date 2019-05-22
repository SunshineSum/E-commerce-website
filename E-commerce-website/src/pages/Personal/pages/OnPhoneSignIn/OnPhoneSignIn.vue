<template>
  <div id="onPhoneSignIn">
    <div class="view">
      <div class="logo">手机号注册</div>
      <div class="verifier">
        <div class="inputP phoneNum">
          <input type="text" maxlength="11" placeholder="请输入手机号" v-model="text" name="phone" v-validate="{required: true,regex: /^1\d{10}$/}"/>
          <span class="item_icon" v-show="text" @click="text=''">
            <i class="iconfont iconquxiao1"></i>
          </span>
        </div>
        <p style="color: red;" v-show="errors.has('phone')">{{ errors.first('phone') }}</p>
        <div class="inputP phoneMsg">
          <input type="text" maxlength="6" placeholder="请输入短信验证码" v-model="code" name="code" v-validate="{required: true,regex: /\d{6}$/}"/>
          <button :disabled="computeTime>0" @click="getMsg">{{computeTime>0?`已发送(${computeTime}s)`:`获取验证码`}}</button>
        </div>
        <p style="color: red;" v-show="errors.has('code') ">{{ errors.first('code') }}</p>
        <div class="inputP phoneMsg">
          <input type="text" minlength="8" maxlength="18" placeholder="请输入密码" v-model="msg" name="pwd" v-validate="{required: true}"/>
        </div>
        <p style="color: red;" v-show="errors.has('pwd')">{{ errors.first('pwd') }}</p>
        <mt-button class="btn" type="danger" @click="login">
          <a href="javascript:;" >注册</a>
        </mt-button>
        <div class="choose">
          <input type="checkbox">
          <span>我同意</span>
          <span>《服务条款》</span>
          <span>和</span>
          <span>《网易隐私政策》</span>
        </div>
        <div class="footer">
          <div class="zc">
            <span @click="goTo('/personal/onEmailSignIn')">邮箱账号注册</span>
            <span class="item_icon">
              <i class="iconfont iconicon_jiangtoul_right"></i>
            </span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui'
  export default {
    name: 'OnPhoneSignIn',
    data(){
      return{
        text:'',
        msg:'',
        code:'',
        computeTime:0,    //倒计时剩余时间
      }
    },
    methods:{
      goTo(path){
        this.$router.replace(path)
      },
      getMsg(){
        clearInterval(timeId)
        this.computeTime=30
        let timeId
        setInterval(()=>{
          timeId=this.computeTime--
          if(this.computeTime===0){
            clearInterval(timeId)
          }
        },1000)
      },
      async login(){
        let success = await this.$validator.validateAll(['phone','code'])
        if(success){
          MessageBox.alert('登录成功')
        }else {
          MessageBox.alert('手机号或验证码不正确')
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"

  #onPhoneSignIn
    .view
      width 100%
      height 830px
      /*background yellow*/
      margin-top 50px
      .logo
        width 100%
        height 61px
        text-align center
        line-height 61px
        margin-bottom 138px
        font-size 35px
      .verifier
        width 100%
        height 572px
        /*background royalblue*/
        padding 0 5%
        box-sizing border-box
        .inputP
          width 100%
          height 110px
          border-bottom 1px solid #eee
          display flex
          justify-content space-between
          align-items center
          span
            font-size 28px
            color rgba(0,0,0,.8)
            .iconfont
              font-size 28px
              color rgba(0,0,0,.8)
              margin-right 16px
          p
            font-size 20px
            float left
          input
            font-size 28px
            color rgba(0,0,0,.5)
            border 0
            outline none
          button
            width 200px
            height 60px
            /*background yellow*/
            line-height 60px
            text-align center
            border-radius 10px
            background white
            color rgba(0,0,0,.7)
          .left
            color rgba(0,0,0,.5)
            font-size 28px
          .right
            color rgba(0,0,0,.7)
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
        .footer
          clearFix()
          width 670px
          height 160px
          padding 0 40px
          /*background yellow*/
          .btn
            width 100%
            height 90px
            margin 0 auto 32px
            display flex
            justify-content space-around
            line-height 90px
            border 1px solid #b4282d
            background white
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
              color #b4282d
              text-decoration none
          .zc
            width 100%
            height 40px
            margin-top 30px
            line-height 40px
            text-align center
            font-size 24px
            color rgba(0,0,0,.5)
            span
              .iconfont
                font-size 24px
</style>
