<template>
  <div id="categoryModule">
    <div class="itemList" v-for="(itemList,index) in categoryModule" :key="index">
      <img :src="itemList.titlePicUrl" alt="">
      <div class="wrapper">
        <ul class="content">
          <li v-for="(item,index) in itemList.itemList" :key="index">
            <img :src="item.scenePicUrl" alt="">
            <p class="name ellipsis">{{item.name}}</p>
            <p class="price">
              <span class="new">￥{{item.retailPrice}}</span>
              <span class="old">￥{{item.counterPrice}}</span>
            </p>
            <div class="tagWarp">
              <div class="status">{{item.promTag}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    name: 'CategoryModule',
    computed: {
      ...mapState(['categoryModule'])
    },

    watch:{
      categoryModule(){
        this.$nextTick(()=>{
          const lists=document.querySelectorAll('.wrapper')
          Array.from(lists).forEach((item,index)=>{
            new BScroll(item, {
              click:true,
              scrollX:true
            })
          })

        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #categoryModule
    background #F5F5F5
    .itemList
      width 100%
      height 781px
      margin-bottom 20px
      /*background yellow*/
      background white
      img
        width 100%
        height 370px
        margin-bottom 20px
      .wrapper
        width 100%
        height 361px
        display flex
        overflow hidden
        .content
          display flex
          height 361px
          padding 0 30px 30px 30px
          /*background purple*/
          li
            width 200px
            height 361px
            margin-right 20px
            /*background yellow*/
            float left
            img
              width 200px
              height 200px
              margin-bottom 12px
              background #f4f4f4
            .name
              width 200px
              height 72px
              font-size 24px
              line-height 72px
              /*background royalblue*/
            .price
              width 200px
              height 36px
              margin-bottom 4px
              font-size 24px
              line-height 36px
              /*background red*/
              .new
                width 57px
                height 36px
                font-size 24px
                line-height 36px
                /*background yellow*/
                color #b4282d
              .old
                width 57px
                height 36px
                font-size 24px
                line-height 36px
                /*background yellow*/
                color #999
                text-decoration line-through
                margin-left 8px
            .tagWarp
              width 200px
              height 33px
              font-size 20px
              line-height 33px
              .status
                height 30px
                ine-height 30px
                border 1 solid #b4282d
                margin-bottom 4px
                font-size 20px

</style>
