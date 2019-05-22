<template>
  <div id="topicList">
    <div class="title">
      <div class="titleName">专题精选</div>
      <div class="more">
        <span>更多</span>
        <span class="item_icon">
          <i class="iconfont iconicon_jiangtoul_right"></i>
        </span>
      </div>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in topicList" :key="index">
          <img :src="item.itemPicUrl" alt="">
          <p class="title">{{item.title}}</p>
          <p class="subtitle">{{item.subtitle}}</p>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'

  export default {
    name: 'TopicList',
    computed:{
      ...mapState(['topicList'])
    },
    mounted(){
      var mySwiper = new Swiper ('.swiper-container', {
        //direction: 'horizontal', // 水平切换选项
        loop: true, // 循环模式选项
        clickX:true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #topicList
    width 100%
    height 508px
    background white
    /*background royalblue*/
    margin-bottom 20px
    .title
      width 690px
      height 100px
      padding 0 30px
      /*background red*/
      display flex
      justify-content space-between
      .titleName
        width 289.5px
        height 100px
        /*background yellow*/
        font-size 32px
        line-height 100px
      .more
        width 90px
        height 100px
        font-size 28px
        /*background yellow*/
        display flex
        line-height 100px
        .iconfont
          font-size 24px
          width 13px
          height 23px
    .swiper-container
      width 690px
      height 378px
      margin 0 30px 30px 30px
      .swiper-wrapper
        width 100%
        height 100%
        box-sizing border-box
        .swiper-slide
          width 100%
          height 354px
          padding-bottom 24px
          float left
          img
            width 100%
            height 269px
            padding-bottom 16px
          .title
            width 100%
            height 41px
            padding 0 20px
            margin-bottom 6px
            font-size 28px
            line-height 41px
          .subtitle
            width 100%
            height 24px
            padding 0 20px
            font-size 24px
            line-height 24px
            color #7f7f7f
</style>
