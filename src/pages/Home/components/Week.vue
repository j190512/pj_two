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
      <li class="hotsale-item" v-for="item of hotList" :key="item.id">
        <a href="#">
          <div class="hot-tag">
            <img :src="item.tag" alt srcset />
          </div>
          <div class="hot-img">
            <img :src="item.imgUrl" alt />
          </div>
          <div class="hot-sight-name">XXX</div>
          <div class="hot-price">
            <span class="price">
              ￥
              <em class="price-num" v-text="item.priceNum"></em>
            </span>起
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeek",
  data() {
    return {
      hotList: [
        {
          id: "001",
          tag:
            "https://imgs.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png",
          imgUrl:
            "https://imgs.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_250x250_d22ecf6b.jpg",
          sightName: "12",
          priceNum: 35
        },
        {
          id: "002",
          tag:
            "https://imgs.qunarzz.com/piao/fusion/1710/2d/36d0c4adaebbbc02.png",
          imgUrl:
            "https://imgs.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_250x250_d22ecf6b.jpg",
          sightName: "12",
          priceNum: 35
        },
        {
          id: "003",
          tag:
            "https://imgs.qunarzz.com/piao/fusion/1710/67/edc47ffef9e96b02.png",
          imgUrl:
            "https://imgs.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_250x250_d22ecf6b.jpg",
          sightName: "12",
          priceNum: 35
        },
        {
          id: "004",
          tag: "#",
          imgUrl:
            "https://imgs.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_250x250_d22ecf6b.jpg",
          sightName: "12",
          priceNum: 35
        },
        {
          id: "005",
          tag: "#",
          imgUrl:
            "https://imgs.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_250x250_d22ecf6b.jpg",
          sightName: "12",
          priceNum: 35
        },
        {
          id: "006",
          tag: "#",
          imgUrl:
            "https://imgs.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_250x250_d22ecf6b.jpg",
          sightName: "12",
          priceNum: 35
        }
      ]
    };
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