<template>
  <div id="onPhone">
    <div class="view">
      <div class="logo">
        <img src="../../../../common/imgs/logo2.png" alt="">
      </div>
      <div class="verifier">
        <div class="inputP phoneNum">
          <input type="text" maxlength="11" placeholder="请输入手机号" v-model="text" name="phone" v-validate="{required: true,regex: /^1\d{10}$/}"/>
          <span class="item_icon" v-show="text" @click="text=''">
            <i class="iconfont iconquxiao1"></i>
          </span>
        </div>
        <p style="color: red;" v-show="errors.has('phone')">{{ errors.first('phone') }}</p>
        <div class="inputP phoneMsg" v-show="loginType">
          <input type="text" maxlength="6" placeholder="请输入短信验证码" v-model="msg" name="code" v-validate="{required: true,regex: /\d{6}$/}"/>
          <button @click="getMsg" v-show="loginType">{{computeTime>0?`已发送(${computeTime}s)`:`获取验证码`}}</button>
        </div>
        <p style="color: red;" v-show="errors.has('code') && loginType">{{ errors.first('code') }}</p>
        <div class="inputP phoneMsg" v-show="!loginType">
          <input type="text" minlength="8" maxlength="18" placeholder="请输入密码" v-model="msg" name="pwd" v-validate="{required: true,regex: /\d{6}$/}"/>
        </div>
        <p style="color: red;" v-show="errors.has('pwd') && !loginType">{{ errors.first('pwd') }}</p>
        <div class="inputP phoneMsg">
          <div class="left">遇到问题？</div>
          <div class="right" @click="loginTypeFn">{{loginType?'使用短信验证登录':'使用密码验证登录'}}</div>
        </div>
        <mt-button class="btn" type="danger">
          <span class="item_icon">
            <i class="iconfont iconicon-phone"></i>
          </span>
          <a href="javascript:;" @click="login">登录</a>
        </mt-button>
        <div class="footer">
          <mt-button class="btn" type="danger" @click="goTo('/personal')">
            <a href="javascript:;" >其他方式登录</a>
          </mt-button>
          <div class="zc">
            <span @click="goTo('/personal/onPhoneSignIn')">注册账号</span>
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
    name: "OnPhone",
    data(){
      return{
        text:'',
        msg:'',
        computeTime:0,    //倒计时剩余时间
        loginType:true,   //登录方式：true-密码登录，false-短信登录
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
        let success
        if(this.loginType){
          success = await this.$validator.validateAll(['phone','pwd'])
        }else {
          success = await this.$validator.validateAll(['phone','code'])
        }
        if(success){
          MessageBox.alert('登录成功');
        }else {
          MessageBox.alert('手机号或验证码不正确');
        }
      },
      loginTypeFn(){
        this.loginType=!this.loginType
        this.msg=''
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #onPhone
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
        img
          width 184px
          height 61px
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
            input::-webkit-input-placeholder
              font-size 26px
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
          margin 0 auto 32px
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
        .footer
          width 100%
          height 160px
          /*background yellow*/
          .btn
            width 99%
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
