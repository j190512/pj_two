<template>
  <div>
    <swiper :options="swiperOption" class="wrapper">
      <swiper-slide v-for="item of swiperList" :key='item.id'>
        <img
          :src="item.imgUrl"
          class="swiper-img"
        />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true, // 允许循环
        autoplay: 2000,
        disableOnInteraction: false //默认为true 解决：用户滑动swiper后 swiper停止自动轮播  
      }
    };
  },
  props:{
    swiperList:Array
  }
};
</script>

<style lang='stylus' scoped>
.wrapper >>>.swiper-pagination-bullet-active
  background #fff
.wrapper
  width 100%
  height 0
  padding-bottom 26%
  .swiper-img
    width 100%
</style>