<template>
  <ul class="list">
      <li v-for="(item,key) in cities" :key="key">{{key}}</li>
  </ul>
</template>

<script>
export default {
    name:"CityAlphabet",
    props:{
        cities:Object
    }
}
</script>

<style lang='stylus' scoped>
@import '~styles/variables.styl'
    .list
        display flex
        flex-direction column
        position absolute
        justify-content center
        right 0
        bottom 0
        top 60%
        transform translateY(-50%)
        width .4rem
        li
            font-size .3rem
            text-align center
            color $bgColor
            margin-top .1rem

</style>