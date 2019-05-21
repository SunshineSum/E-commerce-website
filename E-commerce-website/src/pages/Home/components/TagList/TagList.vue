<template>
  <div id="tagList">
    <div class="title">
      <div class="titleName">品牌制造商直供</div>
      <div class="more">
        <span>更多</span>
        <span class="item_icon">
          <i class="iconfont iconicon_jiangtoul_right"></i>
        </span>
      </div>
    </div>
    <ul class="list">
      <li v-for="(item,index) in tagList" :key="index">
        <div class="content">
          <p class="name">{{item.name}}</p>
          <p class="con">{{item.floorPrice}}元起</p>
        </div>
        <img :src="item.appListPicUrl" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'TagList',
    computed: {
      ...mapState(['tagList'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #tagList
    width 100%
    height 674px
    padding-bottom 8px
    background white
    /*background yellow*/
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
      width 694px
      height 528px
      padding 0 26px 26px 30px
      margin-bottom 20px
      li
        width 343px
        height 260px
        /*background orange*/
        margin 0 4px 4px 0
        float left
        background #f4f4f4
        .content
          width 100%
          height 72px
          .name
            width 100%
            height 33px
            margin-bottom 3px
            font-size 28px
            line-height 33px
            text-align center
          .con
            width 100%
            height 36px
            font-size 24px
            line-height 36px
            text-align center
        img
          width 80%
          height 158px
          padding 20px 10% 10px

</style>
