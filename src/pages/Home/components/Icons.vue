<template>
  <div class="icons">
    <swiper :options="swiperOption" class="wrapper">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div v-for="item of page" :key="item.id">
          <div class="icon">
            <img :src="item.imgSrc" alt="景点门票" />
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
      },
      iconList: [
        {
          id: "001",
          imgSrc:
            "https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "景点门票"
        },
        {
          id: "002",
          imgSrc:
            "https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "景点门票"
        },
        {
          id: "003",
          imgSrc:
            "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/3ef092d0a89ffddb7f781cda30c8ae49.png",
          desc: "暑假大促"
        },
        {
          id: "004",
          imgSrc:
            "https://imgs.qunarzz.com/piao/fusion/1803/35/9639025c30a3d802.png",
          desc: "一日游"
        },
        {
          id: "005",
          imgSrc:
            "https://imgs.qunarzz.com/piao/fusion/1803/35/9639025c30a3d802.png",
          desc: "一日游"
        },
        {
          id: "006",
          imgSrc:
            "https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "景点门票"
        },
        {
          id: "007",
          imgSrc:
            "https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "景点门票"
        },
        {
          id: "008",
          imgSrc:
            "https://imgs.qunarzz.com/piao/fusion/1803/35/9639025c30a3d802.png",
          desc: "一日游"
        },
        {
          id: "009",
          imgSrc:
            "https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "景点门票"
        },
        {
          id: "010",
          imgSrc:
            "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/3ef092d0a89ffddb7f781cda30c8ae49.png",
          desc: "暑假大促"
        },
        {
          id: "011",
          imgSrc:
            "https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "景点门票"
        }
      ]
    };
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