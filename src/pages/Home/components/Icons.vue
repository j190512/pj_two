<template>
  <div class="icons">
    <swiper :options="swiperOption" class="wrapper">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div v-for="item of page" :key="item.id">
          <div class="icon">
            <img :src="item.imgUrl" alt="景点门票" />
            <div class="text">{{item.desc}}</div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination dots" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination"
      }
    };
  },
  props:{
    iconList:Array
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>

<style lang='stylus' scoped>
@import '~styles/ellipsis.styl'
.wrapper >>> .dots
  position absolute
  width 100%
  bottom 0
.icons
  background-color #fff
  overflow hidden
  width 100%
  height 3.7rem
  .wrapper
    position relative
    width 100%
    height 100%
    background rgba(0, 0, 0, 0)
    .icon
      width 25%
      height 1.5rem
      padding-top 0.1rem
      float left
      text-align center
      img
        width 1.1rem
        height 1.1rem
      .text
        margin-top 0.1rem
        font-size 0.28rem
        ellipsis()
</style>