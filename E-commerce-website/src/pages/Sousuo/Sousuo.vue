<template>
  <div id="sousuo">
    <div class="content">
      <div class="header">
        <div class="left">
          <span class="item_icon">
            <i class="iconfont iconiconsousuo"></i>
          </span>
          <input @keyup="handle" type="text" placeholder="英国摩飞榨汁杯，仅199元" v-model="text" />
          <span class="item_icon" v-show="text" @click="clearInput">
            <i class="iconfont iconquxiao1"></i>
          </span>
        </div>
        <div class="right" @click="$router.back()">取消</div>
      </div>
      <div class="con" v-if="!text">
        <p class="title">热门搜索...</p>
        <ul class="list">
          <li :class="{on:currentIndex===index}" v-for="(item,index) in list" :key="index" @click="itemOn(index)">{{item}}</li>
        </ul>
      </div>
      <ul class="sousuoList" v-if="text">
        <li v-for="(item,index) in searchDataList" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "Sousuo",
    data(){
      return{
        list:['拖鞋','9.9元爆品超值购','粽子礼盒，限时8折','风扇','烟台大樱桃','耳机','电动牙刷69元起','袜子','夏凉床品','杯子','爆款  行李箱','女鞋'],
        text:'',
        currentIndex:0,    //当前点击导航栏下标
      }
    },
    computed:{
       ...mapState(['searchDataList']),
      // searchDataList(){    //直接从状态中获取数据
      //   return this.$store.state.searchDataList
      // }

    },
    methods:{
      itemOn(index){
        this.currentIndex=index
      },
      handle(){
        // this.searchDataList=[]
        // this.$store.state.searchDataList=[]
        setTimeout(()=>{
          this.$store.dispatch('getSearchDataList',this.text)
        },300)
      },
      clearInput(){
        this.text=''
        // this.searchDataList=[]
        // this.$store.state.searchDataList=[]  //直接修改状态中的数据
      }
    },
    // mounted() {
    //   setTimeout(()=>{
    //     this.$store.dispatch('getSearchDataList',this.text)
    //   },1000)
    //   // this.$store.dispatch('getSearchDataList',this.text)
    // }

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
      /*background #fff*/
      .header
        bottom-border-1px(#e4e4e4)
        width 690px
        height 87px
        background #fff
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
        background #fff
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
            &.on
              border-color #b4282d
              color #b4282d

      .sousuoList
        position relative
        z-index 5
        width 720px
        padding-left 30px
        background white
        li
          bottom-border-1px(#e4e4e4)
          width 100%
          height 104px
          line-height 104px
          font-size 32px


</style>


