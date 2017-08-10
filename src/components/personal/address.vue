<template>
<div>
    <mt-header title="修改地址">
        <router-link to="/Personal/personalDetails" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button  slot="right" @click.native="editAddress">保存</mt-button>
    </mt-header>
    <mt-field label="收货人" placeholder="请输入用户名" v-model="username"></mt-field>

    <mt-cell class="mint-field" title="省市区" is-link @click.native="showAddress">    
         <span>{{address}}</span>
    </mt-cell>


    <mt-field label="地址" placeholder="" v-model="location"></mt-field>
    <mt-field label="电话" placeholder="" v-model="iphone"></mt-field>

    <!--省市级三级联动组件-->
    <vue-area :props-show="show" :props-result="result" v-on:result="areaResult"></vue-area>
    <!--省市级三级联动组件结束-->
</div>
</template>

<script>
import { Field ,Header} from 'mint-ui';
//引入省市级页面
import vueArea from 'vue-area';
    export default{
        name:'editName',
        data:function(){
             return {
                    username:'',
                    location:'',
                    iphone:'',                   
                    address:'',
                    result: {},
                    show: false
                 }
             },
        components:{
           vueArea
        },
        methods:{
           editAddress(){
              this.$store.dispatch('uploadBirthday',{
                 $http:this.$http,
                 data:{
                   /* birthday:this.EditUserInfo.birthday,
                    gender:this.EditUserInfo.gender,*/
                    shippingAddress:this.username+'_'+this.address+'_'+this.location+'_'+this.iphone
                 }
              });
           },
           areaResult: function(show, result){
                this.show = show;
                this.result = result;
                if(!this.result.province){
                    return ;
                }
                this.address=this.result.province.name+this.result.city.name+this.result.area.name;
             },
             //组件，展示省市级三级联动页面
           showAddress(){
               this.show=true;
               this.result=null;
           }
           
        },
        created(){
            this.$store.dispatch('get_EditUserInfo', {
                $http: this.$http
            });
          this.username=this.EditUserInfo.shippingAddress.split('_')[0];
          this.address=this.EditUserInfo.shippingAddress.split('_')[1];
          this.location=this.EditUserInfo.shippingAddress.split('_')[2];
          this.iphone=this.EditUserInfo.shippingAddress.split('_')[3];
         },
         computed:{
            EditUserInfo(){
                return this.$store.getters.EditUserInfo;
            }
         }
   } 
</script>

<style>
    
</style>