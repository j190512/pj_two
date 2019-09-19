<template>
  <div>
      <div class="weekend-title">周末去哪儿</div>
      <div>
          <ul>
              <li class="weekend-list">
                  <div class="img"><img src="https://imgs.qunarzz.com/sight/source/1511/8f/bf3a40e4afcf29.jpg_r_640x214_90225212.jpg" alt=""></div>
                  <div class="product-item">
                      <p class="product-name">泉心泉意</p>
                      <p class="product-desc">这个冬天不干燥，养生养颜休闲一举两得，这里有厦门独特的温泉渡假旅游区</p>
                  </div>
              </li>
          </ul>
          
          
      </div>
  </div>
</template>

<script>
export default {
    name:'HomeWeekend'
}
</script>

<style lang='stylus' scoped>
@import '~styles/ellipsis.styl'
    .weekend-title
        padding-left .26rem
        font-size .28rem
        color #212121
        line-height .8rem
    .weekend-list
        margin-bottom .16rem
        background-color #fff
        .img 
            width 100%
            height 2.72rem
            img 
                width 100%
        .product-item  
            padding .14rem .2rem .2rem
            .product-name
                color #212121
                font-size .28rem
                line-height .48rem
            .product-desc
                color #616161
                font-size .24rem
                ellipsis()
</style>