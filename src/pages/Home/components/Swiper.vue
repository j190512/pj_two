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
      },
      swiperList:[{
          id:'001',
          imgUrl:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/5e82991722549bfec5ada28ab25d0820.jpg_750x200_4bb9032d.jpg'
      },
      {
          id:'002',
          imgUrl:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/762cab02f2bb5ec44244c6d2ec848dc3.jpg_750x200_6a1c6444.jpg'
      }]
    };
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