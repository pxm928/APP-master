<template>
  <div id="app">
    <router-view></router-view>
   <mt-tabbar v-model="selected">
   <mt-tab-item id="/" @click.native="routerLink('/')">
     <img slot="icon" src="./assets/logo.png">
     外卖
   </mt-tab-item>
   <mt-tab-item id="订单" @click.native="routerLink('外卖')">
     <img slot="icon" src="./assets/logo.png">
     订单
   </mt-tab-item>
   <mt-tab-item id="发现" @click.native="routerLink('外卖')">
     <img slot="icon" src="./assets/logo.png">
     发现
   </mt-tab-item>
   <mt-tab-item id="/Personal"  @click.native="routerLink('/Personal')">
     <img slot="icon" src="./assets/logo.png">
    <router-link to="/Person">我的</router-link>
   </mt-tab-item>
     </mt-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabItem } from 'mint-ui';
export default {
  name: 'app',
  data(){
    return {
      selected:''
    }
  },
  created(){
    //console.log(document.cookie);
    // console.log(this.$cookie);
     if(this.$cookie.get('userinfo')){
        //得到的是字符串；
        let userInfo=JSON.parse(this.$cookie.get('userinfo'));
        this.$store.commit('updateUserInfo',userInfo);
     }
  },
  methods:{
      routerLink(path){
          this.$router.push(path);
      }
  }
}
</script>

<style>
body{
  margin:0;
}
ul{
  margin:0;
  padding:0;
  list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  height:100%;
  width:100%;

}
yys_title{
  height: 50px;
}
.mint-tab-item-label{
  color: #000;
}
.mint-button--primary{
  background:  #6EC3C9
}
.main{
  margin:50px 0 56px 0;
  float: left;
  width: 100%;
}
.mint-tabbar{
  position: fixed;
}
.mint-header.is-fixed{
z-index: 10;
}

 .mint-header{
      background-color:#81d8d0 ;
    }
</style>
