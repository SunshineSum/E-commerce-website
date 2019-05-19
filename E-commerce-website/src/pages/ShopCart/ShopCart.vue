<template>
  <div id="shopCart">
    <header class="header">
      <div class="left">购物车</div>
      <div class="right" @click="goTo('/personal')">领劵</div>
    </header>
    <ul class="list">
      <li>30天无忧退货</li>
      <li>48小时快速退款</li>
      <li>满88元免邮费</li>
    </ul>
    <div class="content">
      <img src="../../common/imgs/shop.png" alt="">
      <p>去添加点什么吧</p>
    </div>
    <mt-button class="btn" type="danger" @click="goTo('/personal')">
      <a href="javascript:;" >登录</a>
    </mt-button>
  </div>
</template>

<script>
  export default {
    name: 'ShopCart',
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #shopCart
    background #f4f4f4
    height 1236px
    .header
      width 690px
      height 88px
      padding 0 30px
      background white
      .left
        width 108px
        height 88px
        float left
        font-size 36px
        line-height 88px
      .right
        width 90px
        height 88px
        float right
        font-size 30px
        color #B4282D
        line-height 88px
    .list
      width 690px
      height 70px
      line-height 70px
      padding 0 30px
      display flex
      justify-content space-between
    .content
      width 750px
      height 300px
      /*background yellow*/
      text-align center
      margin-top 384px
      p
        font-size 28px
        color #999
    .btn
      width 480px
      height 92px
      margin 0 auto
      display flex
      justify-content space-around
      line-height 92px
      a
        width 92px
        height 100%
        font-size 30px
        color white
</style>
