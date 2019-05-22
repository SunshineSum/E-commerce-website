<template>
  <div id="onMail">
    <div class="view">
      <div class="logo">
        <img src="../../../../common/imgs/logo2.png" alt="">
      </div>
      <div class="verifier">
        <div class="inputP phoneNum">
          <input type="text" placeholder="邮箱账号" v-model="text" name="myemail" v-validate="'required|email'"/>
          <span class="item_icon" v-show="text" @click="text=''">
            <i class="iconfont iconquxiao1"></i>
          </span>
        </div>
        <span style="color: red;" v-show="errors.has('myemail')">{{ errors.first('myemail') }}</span>
        <div class="inputP phoneMsg">
          <input minlength="8" maxlength="18" type="text" placeholder="密码" v-model="pwd" name="pwd" v-validate="'required'"/>
          <span class="item_icon" v-show="pwd" @click="pwd=''">
            <i class="iconfont iconquxiao1"></i>
          </span>
        </div>
        <span style="color: red;" v-show="errors.has('pwd')">{{ errors.first('pwd') }}</span>
        <div class="inputP phoneMsg">
          <div class="left">注册账号</div>
          <div class="right">忘记密码</div>
        </div>
        <mt-button class="btn" type="danger" @click="login">
          <span class="item_icon">
            <i class="iconfont iconicon-phone"></i>
          </span>
          <a href="javascript:;" >登录</a>
        </mt-button>
        <div class="footer">
          <mt-button class="btn" type="danger" @click="goTo('/personal')">
            <a href="javascript:;" >其他方式登录</a>
          </mt-button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui'
  export default {
    name: 'OnMail',
    data(){
      return{
        text:'',
        pwd:'',
      }
    },
    methods:{
      goTo(path){
        this.$router.replace(path)
      },
      async login(){
        let success = await this.$validator.validateAll(['myemail','pwd'])
        if(success){
          MessageBox.alert('登录成功')
        }else {
          MessageBox.alert('邮箱或密码不正确')
        }
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #onMail
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
          height 120px
          border-bottom 1px solid #eee
          display flex
          justify-content space-between
          align-items center
          &.phoneNum
            margin-top 40px
          span
            font-size 28px
            color rgba(0,0,0,.8)
            .iconfont
              font-size 28px
              color rgba(0,0,0,.8)
              margin-right 16px
          input
            font-size 28px
            color rgba(0,0,0,.5)
            border 0
            outline none
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
          /*padding 0 40px*/
          text-align center
          /*background yellow*/
          .btn
            width 99%
            height 90px
            margin 0 auto 32px
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
</style>
