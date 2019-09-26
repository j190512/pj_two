<template>
<div>
<div class="banner" @click="handleGrallary">
      <!-- <img src="//img1.qunarzz.com/sight/p0/1603/ee/ee2fb567add7969390.water.jpg_600x330_e154265e.jpg" alt=""> -->
      <div class="desc" >
          <p class="banner-title">广州塔(AAAA景区)</p>
          <p class="more-img"><span class="iconfont icon-img">&#xe625;</span> 20</p>
      </div>  
  </div>
  <div v-show="showGrallary" >
          <common-grallary @close="handleGrallaryClose"></common-grallary>
      </div>  
</div>
  
</template>

<script>
import CommonGrallary from '@/common/grallary/Grallary'
export default {
    name:'Banner',
    components:{
        CommonGrallary
    },
    data(){
        return {
            showGrallary:false
        }
    },
    methods:{
        handleGrallary(){
            this.showGrallary = true
        },
        handleGrallaryClose(){
            this.showGrallary = false
            console.log(this.showGrallary);    
        }
    }
}
</script>

<style lang='stylus' scoped>
    .banner
        position relative
        height 0
        padding-bottom 55%
        background-color red
        img 
            width 100%
        .desc   
            display flex
            position absolute
            left 0
            right 0
            bottom 0
            color #fff
            background-image linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.7))
            .banner-title
                padding-left .2rem 
                font-size .36rem
                flex 1
                line-height .56rem
            .more-img
                float right
                background rgba(0,0,0,.7)
                border-radius .2rem
                padding .1rem
                .icon-img
                    margin-right .5rem


</style>