<template lang="html">
<div class="personal">
 
  
    <header class="clear">
        <p class="avatar">     
            <img :src="'http://localhost:8888/'+userInfo.avatar">
            <label for="pic" class="pic"></label>
            <input type="file" id="pic" accept="image/*;capture=camera" @change="uploadAvatar" style="position:absolute;top:-1000px">
        </p>
        <router-link to="/Personal/personalDetails">
            <ul>
                <li>
                    <strong>{{userInfo.username}}</strong>
                </li>
                <li>
                    ID:{{userInfo._id}}
                </li>
                <li class="sign">
                    这家伙很懒
                </li>
            </ul>
        </router-link>
    </header>

  
        <mt-cell title="我的订单" is-link></mt-cell>
        <mt-cell title="我的点评" is-link></mt-cell>
        <mt-cell title="我的收藏" is-link></mt-cell>
        <mt-cell title="最近浏览" is-link></mt-cell> 
   
   

        <mt-cell title="社区论坛" is-link></mt-cell>
        <mt-cell title="联系客服" is-link></mt-cell>
        <mt-cell title="设置" is-link></mt-cell>    

 
       <mt-button size="large" type="danger" @click.native="Logout">退出</mt-button>

    
</div>
</template>

<script>
import { Cell ,Button} from 'mint-ui';
    export default {
        name:'personalIndex',
        data:function(){
            return {
               user:{
                  id:'',
                  name:''
                
                 
               }
            }
        },
        methods:{
          routerLink(path){
            console.log(111);
             this.$router.push(path);
          },
           Logout(){
              this.$store.dispatch('Logout',{
                  $http:this.$http
              }).then((response)=>{
                  this.$store.commit('updateUserInfo',{_id:'',username:''});
                  this.$router.push('/');
              });
           },
           //上传用户头像
           uploadAvatar(e){
            if(!e.target.files[0]){
                 return;
            }
           this.$store.dispatch('uploadAvatar',{
                 $http:this.$http,
                 data:{
                    avatar:e.target.files[0]
                 }
              }).then((response)=>{
                   if(!response.data.code){
                      this.$store.commit('updateUserInfo',{
                         _id:response.data._id,
                         username:response.data.username,
                         avatar:response.data.avatar
                      });
                   }
              });
               
  
           }
        },
        created(){
           // this.user.avatarUrl="./assets/steven.png";
            if(!this.userInfo._id){
                this.$router.push('/Login');
            }
        },
        computed:{
            userInfo(){
                return this.$store.getters.userInfo;
            }
        }
    }
</script>
<style scoped>
     .mint-cell-wrapper{
        text-align: left;
    }
    .mint-header{
      background-color:#81d8d0 ; 
    }
    .text-center{
        text-align:center;
    }
    .clear:after{
        display:block;
        clear:both;
        content:'';
    }
    header{
        padding:10px 0;
        background-color:#81d8d0; 
        color:white;
        height:120px;
        position:relative;
    }
    .avatar{
         float:left; 
         margin-top: 10px;
         margin-left: 15px;
         width:80px;
         height:80px;
        
    }
    .pic{
        position:absolute;
        left:15px;
        top:15px;

        width:80px;
        height:80px;

    }
    .avatar img{
         width:80px;
         height:80px;
         border-radius: 50%;
    }
    ul{
        margin:0;
        padding:0;
        width:160px; 
        padding-left: 20px;
        list-style: none;
        float:left;
        text-align: left;
        line-height: 30px;
      /*   white-space: pre-wrap;
      word-wrap: break-word; */
    }
    .sign{
        color:white;
    }
   
</style>