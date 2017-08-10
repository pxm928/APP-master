<template>
    <div class="hello">
       <mt-header title="注册" fixed>
          
          <mt-button slot="left" icon="back" @click="goback">返回</mt-button>  
          <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
      <form>
          <mt-field label="用户名" placeholder="请输入用户名" v-model="userReg.username"></mt-field>
          <mt-field label="密码" placeholder="请输入密码" type="password" v-model="  userReg.password"></mt-field>
          <mt-field label="重复密码" placeholder="确认密码" type="password" v-model="userReg.repassword"></mt-field>
          <mt-button type="primary" size="large" @click.native="submitReg">提交</mt-button>
      </form>

    
    </div>
</template>

<script>
import { Header,Field,Button } from 'mint-ui';
import { Toast } from 'mint-ui';
export default {
    name: 'Reg',
    data:function() {
            return {
               userReg:{
                   username:'',
                   password:'',
                   repassword:''
               }
           
        }
    },
    methods: {
         submitReg(){
           // console.log(this.userLogin);
            this.$store.dispatch('submitReg',{
                $http:this.$http,
                data:{
                    username:this.userReg.username,
                    password:this.userReg.password,
                    repassword:this.userReg.repassword
                }
            }).then((response)=>{
                //console.log(response);
                if(response.data.code){ 
                    Toast({
                        message: response.data.message,
                        position: 'middle',
                        iconClass: 'icon icon-success',
                        duration: 1000
                    });    
                    
                 }else{
                     Toast({
                        message: '注册成功',
                        position: 'middle',
                        iconClass: 'icon icon-success',
                        duration: 1000
                    });    
                    setTimeout(()=>{
                       this.$store.commit('updateUserInfo',response.data);
                       this.$router.push({'path':'/Person'});
                    },1100)
                    
                 }
            });
         },
        
        goback(){
            this.$router.go(-1);
           // window.history.back();
        }  

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .hello{
     margin-top: 60px;
  }
</style>
