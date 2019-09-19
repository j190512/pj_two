<template>
  <div>
      <div class="weekend-title">周末去哪儿</div>
      <div>
          <ul>
              <li class="weekend-list" v-for="item of weekendList" :key="item.id">
                  <div class="img"><img :src="item.imgUrl" alt=""></div>
                  <div class="product-item">
                      <p class="product-name">{{item.productName}}</p>
                      <p class="product-desc">{{item.productDesc}}</p>
                  </div>
              </li>
          </ul>
          
          
      </div>
  </div>
</template>

<script>
export default {
    name:'HomeWeekend',
    props:{
        weekendList:Array
    }
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