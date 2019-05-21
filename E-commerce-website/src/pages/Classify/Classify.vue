<template>
  <div id="classify">
    <div class="headerWarp" @click="goTo('/sousuo')">
      <div class="header">
        <span class="item_icon">
        <i class="iconfont iconiconsousuo"></i>
      </span>
        <span>搜索商品，共有2254款商品</span>
      </div>
    </div>
    <div class="content">
      <div class="categoryL1ListNames">
        <ul class="categoryL1List">
          <li v-for="(item,index) in categoryL1List" :key="index" @click="headTitle(index)" :class="{on:index===thisIndex}">{{item.name}}</li>
        </ul>
      </div>
      <div class="subcateList">
        <div class="subcate">
          <div class="img">
            <img :src="titles.bannerUrl" alt="">
          </div>
          <ul class="cateList" >
            <li v-for="(item,index) in titles.subCateList" :key="index">
              <img :src="item.bannerUrl" alt="">
              <p>{{item.name}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    name: 'Classify',
    data(){
      return{
        titles:{},  //点击导航对应的对象
        thisIndex:0   //当前点击导航所对应下标
      }
    },
    computed: {
      ...mapState(['categoryData']),
      categoryL1List(){
        if(this.categoryData.categoryL1List){
          return this.categoryData.categoryL1List.slice(0,12)
        }
      }
    },

    methods:{
      headTitle(index){
        this.titles=this.categoryData.categoryL1List[index]
        this.thisIndex=index
      },
      // categoryL1List(){
      //   return this.categoryData.categoryL1List.slice(0,12)
      // },
      goTo(path){
        this.$router.push(path)
      }
    },
    mounted(){
      if(this.categoryData.categoryL1List){
        this.titles=this.categoryData.categoryL1List[0]
        new BScroll('.subcateList',{
          probeType: 2,
          click: true
        })
      }
    },
    watch:{
      categoryData(){
        // console.log('xxxxxxxxxxx')
        this.$nextTick(()=>{
          this.titles=this.categoryData.categoryL1List[0]
          new BScroll('.subcateList',{
            probeType: 2,
            click: true,
          })
        })
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  #classify
    .headerWarp
      bottom-border-1px(#e4e4e4)
      width 690px
      height 88px
      /*background yellow*/
      padding 0 30px
      display flex
      align-items center
      .header
        width 100%
        height 54px
        background #ededed
        line-height 54px
        text-align center
        font-size 28px
        .iconfont
          font-size 28px
    .content
      width 100%
      height 1148px
      /*background #7e8c8d*/
      .categoryL1ListNames
        float left
        width 162px
        height 1148px
        /*background purple*/
        .categoryL1List
          width 162px
          height 1040px
          /*background yellow*/
          padding 40px 0
          li
            width 162px
            height 50px
            margin-top 40px
            /*background royalblue*/
            font-size 28px
            line-height 50px
            text-align center
            &.on
              color #ab2b2b
              border-left 6px solid #ab2b2b
            &:first-child
              margin-top 0
      .subcateList
        float right
        width 528px
        height 1097px
        padding 30px 30px 21px 30px
        overflow hidden
        /*background yellow*/
        .subcate
          .img
            width 528px
            height 192px
            margin-bottom 32px
            /*background royalblue*/
            img
              width 528px
              height 192px
          .cateList
            clearFix()
            width 528px
            /*height 864px*/
            /*background purple*/
            li
              float left
              width 144px
              height 216px
              /*background yellow*/
              margin-right 34px
              &:nth-child(3n)
                margin-right 0
              img
                width 144px
                height 144px
                /*background paleturquoise*/
                border-radius 50%
              p
                width 144px
                height 72px
                /*background royalblue*/
                font-size 24px
                line-height 72px
                text-align center
</style>
