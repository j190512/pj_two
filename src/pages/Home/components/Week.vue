<template>
  <div class="week-hot">
    <div class="title">
      <img src="https://imgs.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt />
      <span class="hot-title">本周热门</span>
      <a href="#">
        全部榜单
        <span class="more-arrow">></span>
      </a>
    </div>
    <ul class="hotsale-list">
      <router-link class="hotsale-item" v-for="item of hotList" :key="item.id" :to="{path:'/detail/'+item.id}">
        <a href="#">
          <div class="hot-tag" v-if="item.tag">
            <img :src="item.tag" alt srcset />
          </div>
          <div class="hot-img">
            <img :src="item.imgUrl" alt />
          </div>
          <div class="hot-sight-name">{{item.sightName}}</div>
          <div class="hot-price">
            <span class="price">
              ￥
              <em class="price-num" v-text="item.priceNum"></em>
            </span>起
          </div>
        </a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeek",
  props:{
    hotList:Array
  }
};
</script>

<style lang='stylus' scoped>
@import '~styles/ellipsis.styl'
.week-hot
  background #fff
  height 4rem
  margin-top 0.2rem
  .title
    position relative
    padding-top 0.24rem
    padding-bottom 0.26rem
    img
      display inline-block
      overflow hidden
      width 0.3rem
      height 0.3rem
      margin-left 0.2rem
      vertical-align top
    .hot-title
      display inline-block
      margin-left 0.08rem
      height 0.44rem
      color #212121
      font-size 0.32rem
      line-height 0.44rem
    a
      position absolute
      top 0.36rem
      right 0.32rem
      color #616161
      font-size 0.24rem
      line-height 0.28rem
      .more-arrow
        margin-left 0.04rem
        font-size 0.36rem
        vertical-align bottom
  .hotsale-list
    padding 0 0.24rem
    overflow-x scroll
    white-space nowrap
  .hotsale-item
    position relative
    display inline-block
    padding 0.06rem 0 0.2rem
    width 2rem
    &:not(:first-child)
      margin-left 0.12rem
    .hot-tag
      position absolute
      left 0
      top 0
      width 0.84rem
      height 0.4rem
      img
        width 100%
    .hot-img
      width 2rem
      height 2rem
      img
        width 100%
    .hot-sight-name
      width 100%
      margin-top 0.12rem
      color #212121
      font-size 0.24rem
      line-height 0.32rem
      text-align center
      ellipsis()
    .hot-price
      color #616161
      font-size 0.24rem
      line-height 0.36rem
      text-align center
      .price
        color #ff8300
        .price-num
          font-size 0.28rem
</style>