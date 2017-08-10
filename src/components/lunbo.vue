<template>
    <div class="index">
  <header-one></header-one>
    <div class="main">
      <!-- 头部 -->
      <header>
        <mt-search v-model="value"></mt-search>
      </header>
      <!-- 内容 -->
      <div class="content">
        <ul class="nav">
           <li>
            <a href="">
              <span class="labelimg"><img src="static/images/chicken.png" alt=""></span>
              <span class="labelsp">烧烤</span>
            </a>
           </li>
           <li>
            <a href="">
              <span class="labelimg"><img src="static/images/delice.png" alt=""></span>
              <span class="labelsp">西餐</span>
            </a>
           </li>
           <li>
            <a href="">
              <span class="labelimg"><img src="static/images/ice.png" alt=""></span>
              <span class="labelsp">冰淇淋</span>
            </a>
           </li>
           <li>
            <a href="">
              <span class="labelimg"><img src="static/images/quan.png" alt=""></span>
              <span class="labelsp">甜品</span>
            </a>
           </li>
           <li>
            <a href="">
              <span class="labelimg"><img src="static/images/huoguo.png" alt=""></span>
              <span class="labelsp">火锅</span>
            </a>
           </li>
           <li>
            <a href="">
              <span class="labelimg"><img src="static/images/fresh.png" alt=""></span>
              <span class="labelsp">水果</span>
            </a>
           </li>
           <li>
            <a href="">
              <span class="labelimg"><img src="static/images/eat.png" alt=""></span>
              <span class="labelsp">早餐</span>
            </a>
           </li>
           <li>
            <a href="">
              <span class="labelimg"><img src="static/images/starbucks.png" alt=""></span>
              <span class="labelsp">咖啡</span>
            </a>
           </li>
        </ul> 
      <div class="proimg">
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide class="lunbo_box2"><img src="static/images/laziji.png"></swiper-slide>
                <swiper-slide class="lunbo_box2"><img src="static/images/laziji.png"></swiper-slide>
                <swiper-slide class="lunbo_box2"><img src="static/images/laziji.png"></swiper-slide>
                <swiper-slide class="lunbo_box2"><img src="static/images/laziji.png"></swiper-slide>
                <swiper-slide class="lunbo_box2"><img src="static/images/laziji.png"></swiper-slide>
                <swiper-slide class="lunbo_box2"><img src="static/images/laziji.png"></swiper-slide>
                <swiper-slide class="lunbo_box2"><img src="static/images/laziji.png"></swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination" slot="pagination"></div>             
          </swiper>
      </div>
      <div class="jryx">
        <span>今日优选</span>
      </div>
      <div class="project">
        <ul>
          <li>
            <a href="">
              <div class="project_left"><img src="static/images/img1.jpg" alt=""></div>
              <div class="project_right">
                <span class="project_title">和风烤鳗鱼饭</span>
                <span class="project_cost"><i>¥</i>88</span>
                <span class="start">评分：⭐️⭐️⭐️⭐️⭐️</span>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div class="project_left"><img src="static/images/img2.jpg" alt=""></div>
              <div class="project_right">
                <span class="project_title">麻辣烫套餐</span>
                <span class="project_cost"><i>¥</i>88</span>
                <span class="start">评分：⭐️⭐️⭐️</span>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div class="project_left"><img src="static/images/img3.jpg" alt=""></div>
              <div class="project_right">
                <span class="project_title">炸猪排面</span>
                <span class="project_cost"><i>¥</i>88</span>
                <span class="start">评分：⭐️⭐️⭐️⭐️⭐️</span>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div class="project_left"><img src="static/images/img4.jpg" alt=""></div>
              <div class="project_right">
                <span class="project_title">寿司套餐</span>
                <span class="project_cost"><i>¥</i>88</span>
                <span class="start">评分：⭐️⭐️⭐️⭐</span>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div class="project_left"><img src="static/images/img5.jpg" alt=""></div>
              <div class="project_right">
                <span class="project_title">咸肉菜饭</span>
                <span class="project_cost"><i>¥</i>88</span>
                <span class="start">评分：⭐️⭐️⭐️</span>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div class="project_left"><img src="static/images/img5.jpg" alt=""></div>
              <div class="project_right">
                <span class="project_title">咸肉菜饭</span>
                <span class="project_cost"><i>¥</i>88</span>
                <span class="start">评分：⭐️⭐️⭐️</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      </div>  
    </div>
  </div>
  
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import HeaderOne from '@/components/HeaderOne';
export default {
    name: 'lunbo',
    data() {
      return {
        value:'',
        swiperOption: {
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          autoplay: 3000,
          direction : 'horizontal',//轮播方向 vertical：表示垂直
          grabCursor : true,
          setWrapperSize :true,
          autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
        /*  prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',*/
         /* scrollbar:'.swiper-scrollbar',*/  //滚动条
          mousewheelControl : false,
          observeParents:true,
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true,
          // swiper callbacks
          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
          onTransitionStart(swiper){
            console.log(swiper)
          },
          // more Swiper configs and callbacks...
          // ...
        }
      }
    },
    components: {
    swiper,
    swiperSlide,
    HeaderOne
  },
    created(){
     // this.$store.commit('updateSelect', '/');
      this.$store.commit('updataTitle','首页')
   },
    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // you can use current swiper instance object to do something(swiper methods)
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      //this.swiper.slideTo(3, 1000, false);
    }
  }
</script>

<style scoped>

/*原来东西*/
header{
  float: left;
  width: 100%;
  z-index: 9999;
}
ul{
  padding: 0;
  margin: 0;
  list-style: none;
}
a{
  text-decoration: none;
  color: #000
}
.mint-searchbar-inner{
  border-radius: 10px;
}
.content{
  width: 100%;
  float: left;

}
.mint-searchbar{
  z-index: 0;
}
.mint-search{
  height: 52px;
}
.nav{
  width: 100%;
  float: left;
}
.nav li{
  width: 25%;
  float: left;
  margin-top:10px; 
}
.nav li a{
  display: block;
  width: 100%;
}
.labelimg{
  width: 100%;
  float: left;
  text-align: center;
}
.labelimg img{
  width: 50%;
}
.proimg{
  width: 100%;
  float: left;
  padding:10px 0; 
}
.proimg img{
width: 100%;
}
.jryx{
  width: 100%;
  float: left;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  background: url('/static/images/a.png') repeat-x left center;
}
.jryx span{
  padding: 0 30px;
  background: #fff;
}
.project{
  width: 100%;
  float: left;
}
.project ul{
  display: block;
}
.project ul li{
  width: 100%;
  float: left;
  margin-top: 5px;
}
.project ul li{
  width: 100%;
  float: left;
  border-bottom: 1px solid #ccc;
}
.project_left{
  width: 30%;
  float: left;
}
.project_left img{
  width: 75%;
}
.project_right{
  width: 67%;
  float: right;
}
.project_title{
  width: 100%;
  float: left;
  text-align: left;
  font-size: 16px;
  font-weight: 500;
  height: 30px;
  line-height: 30px;
}
.project_cost{
  width: 40%;
  float: left;
  height: 20px; 
  line-height: 20px;
  text-align: left;
  color: #f00;
  font-size: 20px;
  padding: 20px 0;
}
.project_cost i{
  font-size: 16px;
  padding-right: 10px;
}
.start{
  width: 60%;
  float: right;
  text-align: left;
  padding: 15px 0;
}
</style>