<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe62f;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe636;</span>
      输入景点|城市|游玩主题
    </div>
    <!-- <router-link :to="{path:'/city/:city',query:{city:cityName}}"  > -->
    <router-link :to="{name:'City',params:{city:$store.state.city}}">
      <div class="header-right">
        <div class="iconfont arrow-icon">{{$store.state.city}}&#xe64a;</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomeHeader"
};
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.header
  display flex
  background-color $bgColor
  color #fff
  height 0.86rem
  line-height 0.86rem
  .header-left
    width 0.64rem
    float left
    .back-icon
      text-align center
      font-size 0.5rem
  .header-input
    flex 1
    height 0.64rem
    line-height 0.64rem
    margin-top 0.12rem
    margin-left 0.2rem
    padding-left 0.2rem
    border-radius 0.1rem
    background-color #fff
    color #ccc
  .header-right
    padding-top 0.04rem
    min-width 1.04rem
    padding .1rem
    float right
    color #fff
    .arrow-icon
      text-align center
      font-size 0.26rem
</style>