<template>
  <div class="header">
    <div>
      城市选择
      <router-link to="/">
        <div class="iconfont city-back-icon">&#xe62f;</div>
      </router-link>
    </div>
    <div class="title">
        <ul>
            <li class="left" v-bind:class="{active:index == 1}" v-on:click="select(1)">境内</li>
            <li class="right" :class="{active:index == 2}" v-on:click="select(2)">境外·港澳台</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CityHeader",
  data(){
      return {
          index:1
      }
  },
methods:{
    select(i){
        this.index = i;
    }
}
};
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.header
  position relative
  height 1.48rem
  line-height 0.68rem
  color #ffffff
  font-size 0.32rem
  background $bgColor
  text-align center
  .city-back-icon
    color #fff
    font-size 0.5rem
    float left
    left 0.2rem
    top 0
    position absolute
  .title
      height .4rem
      line-height .4rem  
      background-color  $bgColor
      padding .2rem 1rem
      ul
        height .4rem
        border 1px solid #fff
        border-radius .03rem 
        li
            width 50%
            text-align center
            font-size .28rem
            color #fff
            background-color $bgColor
        .left
            float left 
        .right
            float right
  .active
    background #fff !important
    color $bgColor  !important
</style>