<template>
  <div>
    <ul class="kingKongList">
      <li v-for="(item,index) in kingKongList" :key="index">
        <img :src="item.picUrl" alt="">
        <span>{{item.text}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'KingKongModule',
    computed:{
      ...mapState(['kingKongList']),
    },
    mounted(){
      console.log(this.kingKongList[0],'0000')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .kingKongList
    width 100%
    height 372px
    background yellow
    padding-bottom 32px
    li
      width 110px
      height 156px
      margin 10px 20px 9px 20px
      background orange
      float left
      text-align center
      img
        width 110px
        height 110px
      span
        text-align center
        width 110px
        height 36px
        line-height 36px
        margin-top 10px
        font-size 24px
        background purple
</style>
