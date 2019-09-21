<template>
  <div class="search">
          <input class="search-input" type="text" placeholder="请输入城市名字或拼音"> 
  </div>
</template>

<script>
export default {
    name:"CitySearch"
}
</script>

<style lang='stylus' scoped>
    @import '~styles/variables.styl'
    .search
        margin-top .79rem
        height .68rem
        background $bgColor
        padding  .1rem 
        .search-input
            width 100%
            height .62rem
            text-align center
            padding .1rem
            box-sizing border-box
            color #666
            border-radius .08rem
</style>