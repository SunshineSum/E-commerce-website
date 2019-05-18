<template>
  <div id="header">
    <div class="headerTop">
      <div class="logo"></div>
      <div class="headerSearch">
        <i class="iconfont iconiconsousuo"></i>
        <span>搜索商品，共22843款好物</span>
      </div>
      <div class="login">
        <span>登录</span>
      </div>
    </div>
    <div class="wrapper" v-show="!isShowMask">
      <ul class="content">
        <li>推荐</li>
        <li v-for="(item,index) in kingKongListNav" :key="index">{{item.text}}</li>
      </ul>
    </div>
    <div class="iconWarp">
      <div class="linear"></div>
      <i ref="icon" :class="{active:isShowMask}" class="iconfont iconjiantou1 icon" @click="isShowMaskFn"></i>
    </div>
    <div class="navDetail" v-show="isShowMask">
      <div class="all">
        <span>全部频道</span>
      </div>
      <ul class="content" >
        <li >推荐</li>
        <li v-for="(item,index) in kingKongListNav" :key="index" >{{item.text}}</li>
      </ul>
      <div class="mask" v-show="isShowMask"></div>
    </div>

  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    name: 'Header',
    data(){
      return{
        kingKongListNames:[],
        isShowMask:false,
      }
    },
    computed:{
      ...mapState(['kingKongList']),

      kingKongListNav(){
        return this.kingKongList.slice(0,9)
      }
    },
    methods:{
      isShowMaskFn(){
        this.isShowMask=!this.isShowMask
      },
      clooseBtn(event){
        console.log(event)
      }
    },
    mounted(){
      if(this.kingKongList.length>0){
        new BScroll('.wrapper', {
          click:true,
          scrollX:true
        })
      }

    },
    watch:{
      kingKongList(){
        this.$nextTick(()=>{
          new BScroll('.wrapper', {
            click:true,
            scrollX:true
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"

  #header
    position relative
    width 100%
    z-index 5
    /*background yellow*/
    .headerTop
      display flex
      padding 16px 30px
      align-items center
      .logo
        width 138px
        height 40px
        background-image url("../../../../common/imgs/logo.png")
        background-size 100% 100%
        margin-right 20px
      .headerSearch
        padding 0 16px 0 20px
        height 56px
        flex-grow 1
        background #eee
        line-height 56px
        border-radius 8px
        .iconfont
          font-size 28px
          margin-right 10px
          input::-webkit-input-placeholder
            background #eee
      .login
        width 74px
        height 40px
        line-height 40px
        border 1px solid #b4282d
        box-sizing border-box
        text-align center
        margin-left 20px
        span
          font-size 24px
          color #b4282d
    .wrapper
      position relative
      z-index 5
      height 60px
      width 650px
      /*background yellow*/
      display flex
      .content
        display flex
        height 100%
        line-height 60px
        /*background orange*/
        li
          float left
          white-space nowrap
          padding 0 16px
          margin-left 20px
          font-size 28px
          &:nth-child(1)
            margin-left 0
    .iconWarp
      position fixed
      right 0
      top 88px
      width 160px
      height 60px
      text-align center
      line-height 60px
      background #fff
      z-index 10
      display flex
      .linear
        width 60px
        height 60px
        background rgba(255,255,255,0)
      .icon
        width 100px
        height 60px
        font-size 24px
        margin-top 15px
        transform rotateZ(0deg)
        transition 1s
        &.active
          transform rotateZ(180deg)
          transition 1s
    .navDetail
      top-border-1px(#e4e4e4)
      position absolute
      left 0
      top 88px
      width 100%
      height 372px
      /*background yellow*/
      z-index 5
      .all
        padding-left 30px
        height 60px
        font-size 28px
        line-height 60px
      .content
        width 100%
        height 288px
        padding-top 24px
        li
          width 148px
          height 54px
          margin 0 0 40px 30px
          border 1px solid #eee
          text-align center
          line-height 54px
          float left
          &.on
            border 1px solid #b4282d
            color #b4282d
      .mask
        position relative
        width 100%
        height 100%
        background: rgba(0,0,0,.5);
        z-index 1000
</style>
