<template>
  <div class="groud">
    <div class="ground-title">
      <img src="https://imgs.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt />
      <span>猜你喜欢</span>
    </div>
    <ul class="like-list">
      <li class="like-item" v-for="item of guessList" :key="item.id">
        <a href="#">
          <div class="like-img">
            <img :src="item.imgUrl" alt />
            <div class="tag">{{item.tagName}}</div>
          </div>
          <div class="like-info">
            <div class="like-title">{{item.name}}</div>
            <div class="like-comment">
              <span v-for="i of item.stars" :key="i" class="iconfont like-stars">&#xe647;</span>
              <span class="comment-num">{{item.commentNum}}</span>
            </div>
            <div class="like-price">
              <span class="price">
                ￥
                <em class="num">{{item.price}}</em>
              </span>
              起
              <span class="place">{{item.place}}</span>
            </div>
            <div class="like-feature">
              <span class="txt" v-if="item.feature">{{item.feature}}</span>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeGuessLike",
  props:{
    guessList:Array
  }
 
};
</script>

<style lang='stylus' scoped>
@import '~styles/ellipsis.styl'
.groud
  background #fff
  margin-top 0.2rem
  .ground-title
    padding 0.24rem 0 0.26rem
    img
      display inline-block
      overflow hidden
      width 0.3rem
      height 0.3rem
      margin-left 0.2rem
      vertical-align top
    span
      display inline-block
      margin-left 0.08rem
      height 0.44rem
      color #212121
      font-size 0.32rem
      line-height 0.44rem
  .like-list
    margin-left 0.24rem
    .like-item
      position relative
      overflow hidden
      padding 0.2rem 0
      .like-img
        float left
        overflow hidden
        width 2rem
        height 2rem
        img
          width 100%
        .tag
          background-image url('https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png') // img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png)
          position absolute
          top 0.2rem
          left 0
          width 1.02rem
          height 0.38rem
          background-size 100%
          color #fff
          font-size 0.2rem
          line-height 0.38rem
          text-indent 0.04rem
      .like-info
        overflow hidden
        padding-left 0.22rem
        color #616161
        .like-title
          margin-top 0.26rem
          color #212121
          height 0.44rem
          line-height 0.44rem
          font-size 0.32rem
        .like-comment
          margin-top 0.14rem
          font-size 0.24rem
          .like-stars
            font-size .2rem
            color #ffb436
          .comment-num
            vertical-align text-bottom
            margin-left .16rem
            font-size 0.24rem
        .like-price
          position relative
          margin-top 0.22rem
          font-size 0.24rem
          .price
            color #ff8300
            .num
              font-size 0.4rem
          .place
            position absolute
            right 0.24rem
            bottom 0
            font-size 0.24rem
            ellipsis()
        .like-feature
          display inline-block
          margin-top 0.48rem
          margin-right 0.24rem
          background #fff9f9
          padding 0.04rem 0.1rem
          color #f55
          font-size 0.24rem
          line-height 0.34rem
</style>