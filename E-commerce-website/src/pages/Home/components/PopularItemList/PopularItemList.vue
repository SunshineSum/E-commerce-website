<template>
  <div id="popularItemList">
    <div class="title">
      <div class="titleName">人气推荐</div>
      <div class="more">
        <span>跟多</span>
        <span class="item_icon">
          <i class="iconfont iconicon_jiangtoul_right"></i>
        </span>
      </div>
    </div>
    <div class="top">
      <div class="left">
        <img v-if="popularItemList[0]" :src="popularItemList[0].scenePicUrl" alt="">
      </div>
      <div class="right">
        <div class="tapWraper">520特惠</div>
        <div v-if="popularItemList[0]" class="name">{{popularItemList[0].name}}</div>
        <div v-if="popularItemList[0]" class="desc">{{popularItemList[0].simpleDesc}}</div>
        <div v-if="popularItemList[0]" class="price">￥{{popularItemList[0].counterPrice}}</div>
      </div>
    </div>
    <ul class="cut">
      <li v-for="(item,index) in popularItemListNew" :key="index">
        <img :src="item.scenePicUrl" alt="">
        <div class="price">
          <span>{{item.name}}</span>
          <span class="counterPrice">￥{{item.counterPrice}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'PopularItemList',
    computed: {
      ...mapState(['popularItemList']),
      popularItemListNew(){
        return this.popularItemList.slice(1,4)
      }
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  #popularItemList
    width 750px
    height 754px
    background yellow
    padding-bottom 30px
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
    .top
      width 690px
      height 280px
      margin 0 20px 30px 20px
      background royalblue
      display flex
      .left
        width 280px
        height 280px
        margin-right 30px
        background orange
        float left
        img
          width 280px
          height 280px
      .right
        position relative
        left -30px
        top 60px
        width 350px
        height 160px
        background purple
        .tapWraper
          width 78px
          height 28px
          margin-bottom 5px
          padding 0 8px
          line-height 28px
          color #B4282D
          border 1px solid #B4282D
          vertical-align: top
          font-size 20px
        .name
          width 350px
          height 41px
          font-size 28px
          line-height 41px
        .desc
          width 350px
          height 36px
          font-size 24px
          line-height 36px
        .price
          width 350px
          height 41px
          font-size 28px
          line-height 41px
          color #B4282D
    .cut
      width 740px
      height 354px
      padding-left 10px
      background orange
      li
        width 216px
        height 341px
        background yellow
        margin-left 20px
        padding-bottom 13px
        float left
        img
          width 216px
          height 216px
          margin-bottom 12px
        .price
          width 216px
          height 72px
          /*line-height 72px*/
          margin-bottom 4px
          font-size 24px
          .counterPrice
            margin-left 7px
            color #b4282d
</style>
