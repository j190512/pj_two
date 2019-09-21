<template>
  <div class="city-list" ref="wrapper">
    <div>
      <div class="title">当前城市</div>
      <ul>
        <li>
          <a href="#">广州</a>
        </li>
      </ul>
      <div class="title">热门城市</div>
      <ul>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
      </ul>
      <div class="title">A</div>
      <ul>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
      </ul>
      <div class="title">B</div>
      <ul>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
      </ul>
      <div class="title">C</div>
      <ul>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
        <li>
          <a href="#">广州</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "CityList",
  mounted() {
    let scroll = new BScroll(this.$refs.wrapper);
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