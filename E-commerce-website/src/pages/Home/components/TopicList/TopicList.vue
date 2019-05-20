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
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg" alt="实时热销top100">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/8c06fc58e849da6cbaf2838d27f072f3.jpeg" alt="2019新品发布会">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/5e658f72294572822b65e09113ac4311.jpg" alt="愚人不如悦己">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/ea5fde8d19b12c0e252365e713520cd6.jpg" alt="福利站">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/d8645b184bb0b7c9e471d9212d283939.jpg" alt="春季四件套换新">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/3c6358daba8bca7169b0dd2a49df188c.jpg" alt="护理好物集">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'

  export default {
    name: 'TopicList',
    mounted(){
      var mySwiper = new Swiper ('.swiper-container', {
        //direction: 'horizontal', // 水平切换选项
        loop: true, // 循环模式选项
        clickX:true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #topicList
    width 100%
    height 508px
    background white
    background royalblue
    margin-bottom 20px
    .title
      width 690px
      height 100px
      padding 0 30px
      background red
      display flex
      justify-content space-between
      .titleName
        width 289.5px
        height 100px
        background yellow
        font-size 32px
        line-height 100px
      .more
        width 80px
        height 100px
        font-size 28px
        background yellow
        display flex
        line-height 100px
        .iconfont
          font-size 24px
          width 13px
          height 23px
    .swiper-container
      width 690px
      height 378px
      padding 0 30px 30px 30px
      .swiper-wrapper
        width 690px
        height 378px
        box-sizing border-box
        .swiper-slide
          width 480px
          height 354px
          padding-bottom 24px
          margin-right 31px
          float left
          img
            width 480px
            height 269px
            padding-bottom 16px

</style>
