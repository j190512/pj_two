<template>
  <div class="bgc">
      <home-header></home-header>
      <home-swiper :swiperList="swiperList"></home-swiper>
      <home-icons :iconList="iconList"></home-icons>
      <home-week :hotList="weekList"></home-week>
      <home-guess-like :guessList="guessList"></home-guess-like>
      <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeWeek from './components/Week'
import HomeGuessLike from './components/GuessLike'
import HomeWeekend from './components/weekend'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name: 'Home',
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeWeek,
    HomeGuessLike,
    HomeWeekend
  },
  data(){
    return {
      lastCity:'',
      swiperList:[],
      iconList:[],
      weekList:[],
      guessList:[],
      weekendList:[]
    }
  },
  computed:{
    ...mapState(['city'])
  },
  methods:{
    getHomeInfo(){
      axios.get('/api/index.json?city='+this.city).then(res=>{
        const data = res.data.data;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.weekList = data.weekList;
        this.guessList = data.guessList;
        this.weekendList = data.weekendList;
      })
    }
  },
  created(){
    this.getHomeInfo()
    this.lastCity = this.city
  },
  activated(){
    if(this.lastCity !== this.city){
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style lang='stylus' scoped>
.bgc
  background #F5F5F5
</style>