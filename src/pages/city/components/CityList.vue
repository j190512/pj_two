<template>
  <div class="city-list" ref="wrapper">
    <div>
      <div class="title">当前城市</div>
      <ul>
        <li>
          <a href="#">{{city}}</a>
        </li>
      </ul>
      <div class="title">热门城市</div>
      <ul>
        <li  v-for="item of hotCities" :key="item.id">
          <a href="#">{{item.name}}</a>
        </li>
      </ul>      
      <ul v-for="(item,key) of cities" :key="key">
        <div class="title">{{key}}</div>
        <li v-for="i of item" :key="i.id">
          <a href="#">{{i.name}}</a>
        </li>       
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "CityList",
  props:{
    cities:Object,
    hotCities:Array,
    city:String
  },
  created(){
    // 
  },
  mounted() {
    let scroll = new BScroll(this.$refs.wrapper);
    console.log(this.cities)
  }
};
</script>

<style lang='stylus' scoped>
.title
  background #ddd
  font-size 0.24rem
  height 0.72rem
  line-height 0.72rem
  padding-left 0.3rem
.city-list
  overflow hidden
  position absolute
  z-index -1
  top 2.36rem
  bottom 0
  left 0
  right 0
  ul
    overflow hidden
    margin-right -0.02rem
  li
    width 33.33%
    height 0.9rem
    line-height 0.9rem
    font-size 0.28rem
    box-sizing border-box
    border-right 0.02rem solid #ddd
    border-bottom 0.02rem solid #ddd
    text-align center
    float left
    background #fff
    a
      color #666
</style>