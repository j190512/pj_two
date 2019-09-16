import Vue from 'vue'
import App from './App'
import router from './router' 

//引入统一默认的css样式
import 'styles/reset.css'
import 'styles/iconfont.css'
//引入解决移动端1像素问题的css文件
import 'styles/border.css'
//引入fastClick
import fastClick from 'fastclick'
fastClick.attach(document.body)


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
