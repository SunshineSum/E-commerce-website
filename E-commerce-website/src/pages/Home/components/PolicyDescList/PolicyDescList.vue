<template>
  <div id="policyDescList">
    <ul class="policyDescList">
      <li>
        <i class="grow-icon"></i>
        <span>网易自营品牌</span>
      </li>
      <li>
        <i class="grow-icon"></i>
        <span>30天无忧退货</span>
      </li>
      <li>
        <i class="grow-icon"></i>
        <span>48小时快速退款</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'PolicyDescList'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #policyDescList
    background white
    .policyDescList
      width 690px
      height 72px
      line-height 72px
      padding 0 30px
      display flex
      li
        flex-grow 1
        height 36px
        font-size 24px
        color #B4282D
</style>
