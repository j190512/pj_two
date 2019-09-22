<template>
  <ul class="list">
    <li
      v-for="item in letters"
      :key="item"
      :ref="item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
    >{{item}}</li>
  </ul>
</template>

<script>
// import {bus} from '../../../main'
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    }
  },
  methods: {
    handleLetterClick(e) {
      this.$emit("change", e.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus == true) {
        //   console.log(this.$refs["A"][0].offsetTop)
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 114;
          const index = Math.floor((touchY - this.startY) / 20);

          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        },1);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
  }
};
</script>

<style lang='stylus' scoped>
@import '~styles/variables.styl'
.list
  display flex
  flex-direction column
  position absolute
  justify-content center
  right 0
  bottom 0
  top 20%
  width 0.4rem
  li
    height 0.3rem
    font-size 0.3rem
    text-align center
    color $bgColor
    margin-bottom  0.1rem
</style>