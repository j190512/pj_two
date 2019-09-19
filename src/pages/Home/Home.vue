<template>
  <div class="bgc">
      <home-header></home-header>
      <home-swiper></home-swiper>
      <home-icons></home-icons>
      <home-week></home-week>
      <home-guess-like></home-guess-like>
      <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeWeek from './components/Week'
import HomeGuessLike from './components/GuessLike'
import HomeWeekend from './components/weekend'
export default {
  name: 'Home',
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeWeek,
    HomeGuessLike,
    HomeWeekend
  }
}
</script>

<style lang='stylus' scoped>
.bgc
  background #F5F5F5
</style>