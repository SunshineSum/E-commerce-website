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
        <span class="item_icon sousuo" @click="goTo('/search')">
          <i class="iconfont iconiconsousuo"></i>
        </span>
        <span class="item_icon" @click="goTo('/shopcart')">
          <i class="iconfont iconicongouwuche"></i>
        </span>
      </div>
    </header>
    <div class="nav">
      <div class="wrapper">
        <ul class="content">
          <li :class="{on:currentIndex===index}" v-for="(item,index) in categoryL1List" :key="index" @click="handleNav(index)">{{item.name}}</li>
        </ul>
      </div>
    </div>
    <div class="contentWarp" v-for="(recommendDatas,index) in recommendDataList.result" :key="index">
      <div v-if="item.style===1" class="content" v-for="(item,index) in recommendDatas.topics" :key="index">
        <div class="name">
          <img :src="item.avatar" alt="">
          <span>{{item.nickname}}</span>
        </div>
        <div class="title">{{item.title}}</div>
        <div class="pic">
          <img :src="item.picUrl" alt="">
        </div>
        <div class="rcount">
          <span class="item_icon">
            <i class="iconfont iconiconfontfaxian1"></i>
          </span>
          <span>{{item.readCount}}人看过</span>
        </div>
      </div>
      <div class="content2" v-if="item.style===2" v-for="(item,index) in recommendDatas.topics" :key="index">
        <div class="info">
          <div class="name2">
            <span class="ava">
              <img :src="item.avatar" alt="">
            </span>
            <span class="nickname">{{item.nickname}}</span>
          </div>

          <div class="title2">{{item.title}}</div>
          <div class="desc ellipsis">{{item.subTitle}}</div>
          <div class="rcount2">
          <span class="item_icon">
            <i class="iconfont iconiconfontfaxian1"></i>
          </span>
            <span>{{item.readCount}}人看过</span>
          </div>
        </div>
        <div class="img">
          <img :src="item.picUrl" alt="">
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    name: 'Search',
    data(){
      return{
        currentIndex:0,    //当前点击导航栏下标
      }
    },
    methods:{
      goTo(path){
        this.$router.replace(path)
      },
      handleNav(index){
        this.currentIndex=index
      }
    },
    computed: {
      ...mapState(['categoryData']),
      ...mapState(['recommendDataList']),
      categoryL1List(){
        return this.categoryData.categoryL1List
      }
    },
    mounted(){
      if(this.categoryData.categoryL1List){
        new BScroll('.wrapper', {
          click:true,
          scrollX:true
        })
      }

    },
    watch:{
      categoryData(){
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
  @import "../../common/stylus/mixins.styl"

  #search
    background #F5F5F5
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
        line-height 100px
        margin 17px 120px 17px 160px
        text-align center
        float left
        display flex
        align-items center
        img
          vertical-align top
        span
          margin 0 16px
          font-size 28px
          vertical-align top
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
    .nav
      bottom-border-1px(#e4e4e4)
      width 100%
      height 71px
      background #d9d9d9
      /*background yellow*/
      .wrapper
        position relative
        z-index 5
        height 71px
        width 100%
        /*background yellow*/
        display flex
        overflow hidden
        .content
          display flex
          height 71px
          line-height 60px

          /*background orange*/
          li
            float left
            white-space nowrap
            padding 4px 8px 4px 8px
            margin 0 20px
            font-size 28px
            &.on
              color #b4282d
              border-bottom 4px solid #b4282d
            &:nth-child(1)
              margin-left 0
    .contentWarp
      .content
        width 690px
        height 605px
        padding 36px 30px 36px 30px
        margin 20px 0
        background white
        /*background royalblue*/
        .name
          width 690px
          height 54px
          margin-bottom 24px
          line-height 54px
          font-size 28px
          img
            width 54px
            height 54px
            border 1px solid #d9d9d9
            border-radius 50%
        .title
          width 690px
          height 104px
          margin -8px 0 16px 0
          line-height 104px
          font-size 36px
        .pic
          width 690px
          height 376px
          margin-bottom 20px
          img
            width 690px
            height 376px
        .rcount
          width 690px
          height 34px
          margin-bottom 18px 0 -16px 0
          font-size 24px
          color rgba(0,0,0,.5)
          .iconfont
            font-size 24px
            color rgba(0,0,0,.5)
      .content2
        width 690px
        height 272px
        padding 32px 30px 32px 30px
        margin 20px 0
        background white
        .info
          width 400px
          height 272px
          float left
          .name2
            clearFix()
            width 400px
            height 56px
            float left
            line-height 56px
            .ava
              width 54px
              height 54px
              border 1px solid #d9d9d9
              margin-right 12px
              border-radius 50%
              float left
              img
                width 54px
                height 54px
                border-radius 50%
            .nickname
              /*width 224px*/
              height 36px
              font-size 28px
              float left
          .title2
            width 400px
            height 88px
            margin-top 80px
            font-size 36px
          .desc
            width 400px
            height 40px
            padding-top 8px
            font-size 28px
            color rgba(0,0,0,.5)
          .rcount2
            width 175px
            height 34px
            margin-top 18px
            font-size 24px
            color rgba(0,0,0,.5)
            .iconfont
              font-size 24px
              color rgba(0,0,0,.5)
        .img
          width 272px
          height 272px
          float right
          img
            width 272px
            height 272px

</style>
