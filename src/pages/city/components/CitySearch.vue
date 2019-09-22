<template>
  <div>
    <div class="search">
      <input class="search-input" type="text" placeholder="请输入城市名字或拼音" v-model="keyword" />
    </div>
    <div class="content" ref="wrap" v-show="keyword">
      <div>
        <ul>
          <li v-for="item of resultCities" :key="item.id">{{item.name}}</li>
          <li v-show="ifShow">没有数据</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "CitySearch",
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: "",
      resultCities: [],
      timer: null
    };
  },
  computed: {
    ifShow() {
    //   if (this.resultCities == "") {
    //     return true;
    //   }
    //   return false;
    return !this.resultCities.length
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrap);
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (this.keyword == "") {
        this.resultCities = [];
        return;
      }
      //   if (
      //     // element.spell.includes(this.keyword) ||
      //     // element.name.includes(this.keyword)
      //   )

      this.timer = setTimeout(() => {
        const temp = [];
        for (let item in this.cities) {
          this.cities[item].forEach(element => {
            if (
              element.spell.indexOf(this.keyword) > -1 ||
              element.name.indexOf(this.keyword) > -1
            ) {
              temp.push(element);
            }
          });
        }
        this.resultCities = temp;
      }, 50);
    }
  }
};
</script>

<style lang='stylus' scoped>
@import '~styles/variables.styl'
.search
  height 0.68rem
  background $bgColor
  padding 0.1rem
  .search-input
    width 100%
    height 0.62rem
    text-align center
    padding 0.1rem
    box-sizing border-box
    color #666
    border-radius 0.08rem
.content
  overflow hidden
  position absolute
  z-index 1
  background #eee
  top 2.36rem
  left 0
  right 0
  bottom 0
  li
    height 0.48rem
    line-height 0.68rem
    margin 0 0.2rem
    border-bottom 0.02rem solid #ddd
</style>