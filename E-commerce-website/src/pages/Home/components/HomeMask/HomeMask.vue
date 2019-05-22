<template>
  <div id="homeMask" v-show="isShowMask">
    <div class="delete" @click="isShowMaskFn">
      <span class="item_icon">
        <i class="iconfont iconquxiao"></i>
      </span>
    </div>
    <img src="../../../../common/imgs/xz.png" alt="">
  </div>
</template>

<script>
  export default {
    name: 'HomeMask',
    data(){
      return{
        isShowMask:true
      }
    },
    methods:{
      isShowMaskFn(){
        this.isShowMask=false
      }

    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #homeMask
    position fixed
    top 0
    left 0
    z-index 1000
    width 100%
    height 100%
    background rgba(0,0,0,.5)
    line-height 100%
    text-align center
    .delete
      position absolute
      right 50px
      top 100px
      width 60px
      height 60px
      span
        .iconfont
          font-size 64px
          color rgba(255,255,255,.5)
    img
      position absolute
      top 0
      bottom 0
      left 0
      right 0
      width 520px
      height 648px
      margin auto

</style>
