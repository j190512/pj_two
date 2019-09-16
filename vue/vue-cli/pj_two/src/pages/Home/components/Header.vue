<template>
  <div class="header">
      <div class="header-left">
          <div class="iconfont back-icon">&#xe62f;</div>
      </div>
      <div class="header-input">
          <span class="iconfont">&#xe636;</span>
          输入景点|城市|游玩主题</div>
      <div class="header-right">城市
          <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
  </div>
</template>

<script>
export default {
    name:'HomeHeader'
}
</script>

<style lang="stylus" scoped>
    @import "~styles/variables.styl" 
    .header
        display flex
        background-color $bgColor
        color #fff
        height .86rem
        line-height .86rem
        .header-left
            width: .64rem
            float  left 
            .back-icon
                text-align center
                font-size .4rem
        .header-input
            flex 1
            height .64rem
            line-height .64rem
            margin-top .12rem
            margin-left .2rem
            padding-left .2rem
            border-radius .1rem
            background-color #fff
            color #ccc
        .header-right
            width: 1.24rem
            float right
            text-align center
            .arrow-icon
                font-size .25rem
</style>