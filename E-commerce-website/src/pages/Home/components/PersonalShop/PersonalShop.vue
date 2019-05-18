<template>
  <div id="personalShop">
    <p class="title">私人订制</p>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="./yq.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./yq.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./yq.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./yq.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./yq.jpg" alt="">
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
    name: 'PersonalShop',
    computed:{
      ...mapState(['personalShop']),
    },
    mounted(){
      var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', // 水平切换选项
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #personalShop
    width 100%
    height 470px
    margin-bottom 20px
    background yellow
    .title
      width 690px
      height 100px
      padding 0 30px
      font-size 24px
      line-height 100px
  .swiper-container
    width 100%
    height 370px
    .swiper-wrapper
      width 100%
      height 100%
      .swiper-slide
        width 100%
        height 100%
        img
          width 100%
          height 100%
</style>
