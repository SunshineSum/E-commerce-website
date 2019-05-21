<template>
  <div id="personalShop">
    <p class="title">私人订制</p>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(personalShops,index) in personalShopList" :key="index">
          <div class="personalShop" v-for="(personalShop,index) in personalShops" :key="index">
            <div class="Shop">
              <img :src="personalShop.scenePicUrl">
            </div>
            <div class="text">
              <span>{{personalShop.name}}</span>
              <span>￥{{personalShop.retailPrice}}</span>
            </div>
          </div>
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

      personalShopList(){
        let personalShop=this.personalShop
        let bigArr=[]
        let smallArr=[]
        personalShop.forEach((item)=>{

          if(smallArr.length===0){
            bigArr.push(smallArr)
          }
          smallArr.push(item)
          if(smallArr.length===3){
            smallArr=[]
          }
        })
        // console.log(bigArr,'bigArr')
        return bigArr
      }

    },
    watch:{
      personalShopList(){
        this.$nextTick(()=>{
          var mySwiper = new Swiper ('.swiper-container', {
            //direction: 'horizontal', // 水平切换选项
            loop: true, // 循环模式选项
            clickX:true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      }
    },
    // mounted(){
    //   var mySwiper = new Swiper ('.swiper-container', {
    //     direction: 'horizontal', // 水平切换选项
    //     loop: true, // 循环模式选项
    //
    //     // 如果需要分页器
    //     pagination: {
    //       el: '.swiper-pagination',
    //     },
    //   })
    // }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #personalShop
    width 100%
    height 470px
    margin-bottom 20px
    background white
    /*background yellow*/
    .title
      width 690px
      height 100px
      padding 0 30px
      font-size 32px
      line-height 100px
  .swiper-container
    width 100%
    height 370px
    .swiper-wrapper
      .swiper-slide
        display flex
        .personalShop
          width 216px
          height 300px
          /*background orange*/
          margin-left 20px
          .Shop
            width 216px
            height 216px
            float left
            img
              width 216px
              height 216px
              background #f5f5f5
          .text
            margin-bottom 10px
            padding 0 10px
            span
              width 175px
              height 63px
              line-height 36px
              font-size 24px
              &:last-child
                color #b4282d
</style>
