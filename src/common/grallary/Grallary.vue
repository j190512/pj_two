<template>
  <div class="wrap" @click="handleGrallaryClose">
      <div >
        <swiper :options="swiperOptions" class="container">
            <swiper-slide v-for="(i,index) of imgs" :key="index">
                <img :src="i" alt="网络不好" class="grallary-img">
            </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
      </div>
  </div>
</template>

<script>
export default {
    name:'Grallary',
    data(){
        return {
            swiperOptions:{
                pagination:'.swiper-pagination',
                paginationType:'fraction'
            },
            imgs:['//img1.qunarzz.com/sight/p0/1603/ee/ee2fb567add7969390.water.jpg_600x330_e154265e.jpg','//img1.qunarzz.com/sight/p0/1603/ee/ee2fb567add7969390.water.jpg_600x330_e154265e.jpg']
        }
    },
    methods:{
        handleGrallaryClose(){
            this.$emit('close')          
        }
    }
}
</script>

<style lang='stylus' scoped>
    .wrap >>>.swiper-container
        overflow inherit
    .wrap
        display flex
        flex-direction column
        justify-content center
        position fixed
        top 0
        left 0 
        right 0
        bottom 0
        z-index 9
        background-color #000        
        .container
            width 100%
            height 0
            padding-bottom 55%   
            background-color #fff  
            .grallary-img
                  width 100%
    .swiper-pagination
        bottom  -1rem
        color #fff

</style>