<template>
  <div id="sousuo">
    <div class="content">
      <div class="header">
        <div class="left">
          <span class="item_icon">
            <i class="iconfont iconiconsousuo"></i>
          </span>
          <input type="text" placeholder="英国摩飞榨汁杯，仅199元" v-model="text" />
          <span class="item_icon" v-show="text" @click="text=''">
            <i class="iconfont iconquxiao1"></i>
          </span>
        </div>
        <div class="right" @click="$router.back()">取消</div>
      </div>
      <div class="con">
        <p class="title">热门搜索</p>
        <ul class="list">
          <li v-for="(item,index) in list" :key="index">{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Sousuo",
    data(){
      return{
        list:['拖鞋','9.9元爆品超值购','粽子礼盒，限时8折','风扇','烟台大樱桃','耳机','电动牙刷69元起','袜子','夏凉床品','杯子','爆款  行李箱','女鞋'],
        text:''
      }
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  #sousuo
    background #f4f4f4
    width 100%
    height 1334px
    .content
      width 750px
      height 412px
      background #fff
      .header
        bottom-border-1px(#e4e4e4)
        width 690px
        height 87px
        /*background yellow*/
        padding 0 30px
        line-height 87px
        display flex
        align-items center
        .left
          float left
          width 564px
          height 56px
          line-height 56px
          padding 0 20px
          /*background purple*/
          background #f4f4f4
          span
            font-size 28px
            color rgba(0,0,0,.8)
            .iconfont
              font-size 28px
              color rgba(0,0,0,.8)
              margin-right 16px
          input
            width 468px
            height 39px
            padding 2px
            font-size 28px
            color rgba(0,0,0,.5)
            background #f4f4f4
            border 0  // 去除未选中状态边框
            outline none // 去除选中状态边框
        .right
          float left
          width 56px
          height 41px
          line-height 41px
          margin-left 30px
          /*background paleturquoise*/
          font-size 28px
      .con
        width 690px
        height 295px
        /*background purple*/
        padding 0 30px 30px
        margin-bottom 20px
        .title
          width 690px
          height 90px
          line-height 90px
          color #999
          font-size 28px
        .list
          width 720px
          height 237px
          margin 0 -30px -32px 0
          li
            height 45px
            line-height 45px
            font-size 24px
            border 1px solid #999
            padding 0 15px
            margin 0 32px 32px 0
            float left

</style>


