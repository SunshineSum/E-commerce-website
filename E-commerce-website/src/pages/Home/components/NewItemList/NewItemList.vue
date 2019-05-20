<template>
  <div id="newItemList">
    <div class="title">
      <div class="titleName">新品首发</div>
      <div class="more">
        <span>更多</span>
        <span class="item_icon">
          <i class="iconfont iconicon_jiangtoul_right"></i>
        </span>
      </div>
    </div>
    <ul class="cut">
      <li v-for="(item,index) in newItemListM" :key="index">
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
    name: 'NewItemList',
    computed:{
      ...mapState(['newItemList']),
      newItemListM(){
        return this.newItemList.slice(0,6)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #newItemList
    width 100%
    height 808px
    background white
    /*background yellow*/
    padding-bottom 26px
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

    .cut
      width 740px
      height 708px
      padding-left 10px
      /*background orange*/
      li
        width 216px
        height 341px
        /*background yellow*/
        margin-left 20px
        margin-bottom 13px
        float left

        img
          width 216px
          height 216px
          margin-bottom 12px
          background #f5f5f5
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
