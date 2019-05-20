<template>
  <div id="zhongChouList">
    <div class="title">
      <div class="titleName">众筹</div>
      <div class="more">
        <span>更多</span>
        <span class="item_icon">
          <i class="iconfont iconicon_jiangtoul_right"></i>
        </span>
      </div>
    </div>
    <ul class="list">
      <li v-for="(item,index) in zhongChouList" :key="index">
        <img :src="item.picUrl" alt="">
        <div class="content">
          <p class="name">{{item.name}}</p>
          <p class="price">{{item.showRetailPrice}}</p>
          <div class="progressWarp">
            <div class="progress">
              <div class="bg" :style="{width:(item.progress/item.projectId*360)+'px'}"></div>
            </div>
            <div class="progressText">{{Math.round(item.progress/item.projectId*100)}}%</div>
          </div>
          <div class="supportNum">{{item.supportNum}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'ZhongChouList',
    computed: {
      ...mapState(['zhongChouList'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #zhongChouList
    width 100%
    height 611px
    background white
    /*background yellow*/
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
    .list
      width 100%
      height 480px
      border-top 1px solid #eee
      /*background royalblue*/
      li
        width 690px
        height 210px
        padding 30px 30px 0 30px
        /*background purple*/
        float left
        img
          width 210px
          height 210px
          margin-right 30px
          float left
          background #f4f4f4
        .content
          width 450px
          height 168px
          float left
          .name
            width 450px
            height 41px
            line-height 41px
            font-size 28px
          .price
            width 450px
            height 48px
            line-height 48px
            font-size 32px
            color #b4282d
          .progressWarp
            width 450px
            height 36px
            .progress
              width 360px
              height 6px
              margin-top 22px
              background #d8d8d8
              float left
              .bg
                /*width 227px*/
                height 6px
                background #FEA438
            .progressText
              width 49px
              height 36px
              line-height 36px
              font-size 24px
              color #7F7F7F
              float right
              /*background red*/
          .supportNum
            width 450px
            height 36px
            line-height 36px
            font-size 24px
            color #7f7f7f
</style>
