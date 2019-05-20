<template>
  <div id="flashSaleModule">
    <div class="title">
      <div class="titleAndTime">限时购</div>
      <div class="more">
        <span>更多</span>
        <span class="item_icon">
          <i class="iconfont iconicon_jiangtoul_right"></i>
        </span>
      </div>
    </div>
    <ul class="cut">
      <li v-for="(item,index) in flashSaleModule" :key="index">
        <img :src="item.picUrl" alt="">
        <div class="price">
          <span class="activityPrice">￥{{item.activityPrice}}</span>
          <span class="originPrice">￥{{item.originPrice}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'FlashSaleModule',
    computed: {
      ...mapState(['flashSaleModule'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #flashSaleModule
    width 100%
    height 698px
    margin-bottom 20px
    background white
    /*background yellow*/
    .title
      width 690px
      height 100px
      padding 0 30px
      /*background red*/
      display flex
      justify-content space-between
      .titleAndTime
        width 289.5px
        height 100px
        /*background yellow*/
        font-size 32px
        line-height 100px
      .more
        width 80px
        height 100px
        font-size 28px
        /*background yellow*/
        display flex
        line-height 100px
        .iconfont
          font-size 24px
          width 13px
          height 23px

    .cut
      width 710px
      height 598px
      padding 0 10px 0 30px
      /*background purple*/
      li
        width 216px
        height 269px
        /*background yellow*/
        margin-bottom 30px
        margin-right 20px
        float left
        background #F5F5F5
        img
          width 216px
          height 216px
          margin-bottom 12px
        .price
          width 196px
          height 41px
          padding-left 20px

          .activityPrice
            margin-right 12px
            font-size 28px
            color #b4282d
          .originPrice
            font-size 24px
            text-decoration:line-through
</style>
