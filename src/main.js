import Vue from 'vue'
import App from './App'
import router from './router' 
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
//引入统一默认的css样式
import 'styles/reset.css'
import 'styles/iconfont.css'
//引入解决移动端1像素问题的css文件
import 'styles/border.css'
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
