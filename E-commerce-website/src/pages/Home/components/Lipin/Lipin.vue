<template>
  <div id="lipin">
    <span class="item_icon">
        <i class="iconfont iconliwu"></i>
      </span>
  </div>
</template>

<script>
  export default {
    name: "Lipin"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #lipin
    position fixed
    right 0
    top 1014px
    width 112px
    height 80px
    background #fff
    text-align center
    border-radius 40px 0 0 40px
    z-index 10
    span
      width 112px
      height 80px
      line-height 80px
      text-align center
      .iconfont
        font-size 60px
        color #b4282d
</style>
