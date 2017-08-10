<template>
    <div class="hello">
       <mt-header title="登陆" fixed>
         <!--  <mt-button slot="left" icon="back" @click.native="goback">返回</mt-button>
         <mt-button icon="more" slot="right"></mt-button> -->
        <icon name="user" slot="left"></icon>
      </mt-header>
  
          <mt-field label="用户名" placeholder="请输入用户名" v-model="userLogin.username"></mt-field>
          <mt-field label="密码" placeholder="请输入密码" type="password" v-model=" userLogin.password"></mt-field>
          
          <mt-button type="primary" size="large" @click.native="submitLogin">提交</mt-button>
     
      <span>没注册？</span><router-link to="/Reg">点击注册</router-link>
    </div>
</template>

<script>
import { Header,Field,Button } from 'mint-ui';
import { Toast } from 'mint-ui';
export default {
    name: 'login',
    data :function() {
          return {
             userLogin:{
                 username:'',
                 password:''
             }
           
        }
    },
    methods: {
         submitLogin(){
            this.$store.dispatch('submitLogin',{
                $http:this.$http,
                data:{
                    username:this.userLogin.username,
                    password:this.userLogin.password
                }
            }).then((response)=>{
              //登陆失败
                if(response.data.code){
                    Toast({
                        message: '账户不存在',
                        position: 'middle',
                        iconClass: 'icon icon-success',
                        duration: 2000
                    });
                    setTimeout(()=>{
                        this.$router.push({'path':'/Reg'});
                    },2100);
                }else{                  
                    this.message();
                    setTimeout(()=>{
                        this.$store.commit('updateUserInfo',response.data);
                        this.$router.push({'path':'/Personal/index'});
                    },2100);
                }
            });
         },
        goback(){
            window.history.back();
         },

        message() {
            // Toast('Hello');
            Toast({
                message: '登陆成功',
                position: 'middle',
                iconClass: 'icon icon-success',
                duration: 2000
            });
        } 
    }
   /* created(){
        if(!this.userInfo._id){
                this.$router.push('/Login');
          }
    }*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .hello{
      margin-top: 60px;
    }
</style>
