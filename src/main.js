// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
//引入stores 全局状态管理
import store from './stores';
//ajax请求框架
import axios from'axios';
import VueAxios from'vue-axios';
//引入vue-cookie，进行cookie解析
import VueCookie from 'vue-cookie';
//引入awesome字体
import 'vue-awesome/icons/flag';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
//第一个参数插件，第二个参数配置
Vue.use(VueAxios,axios);

//引入swiper,实现移动端轮播图之类
import VueAwesomeSwiper from 'vue-awesome-swiper';
//mount with global
Vue.use(VueAwesomeSwiper)

// import  { AlertPlugin } from 'vux'

Vue.config.productionTip = false

//引入无限加载
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)


Vue.use(MintUI);
Vue.use(VueCookie);
// Vue.use(AlertPlugin);
// globally (in your main .js file) 
Vue.component('icon', Icon)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
