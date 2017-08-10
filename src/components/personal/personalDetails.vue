<template>
   <div>
        <mt-header fixed title="个人信息"></mt-header>
        <div class="details_content">

            <mt-cell
              title="名字"
              to="/Personal/editName"
              is-link
              value="陈丽">
            </mt-cell>

            <mt-cell title="性别" is-link @click.native="checkSex">
               <span>{{ EditUserInfo.gender}}</span>
            </mt-cell>

             <mt-cell title="生日" is-link @click.native="chooseBirthday">
               <span style="color: green">{{new Date(EditUserInfo.birthday).getFullYear()+'/'+new Date(EditUserInfo.birthday).getMonth()+1+'/'+new Date(EditUserInfo.birthday).getDate()}}</span>
            </mt-cell>

             <mt-cell
              title="收货地址"
              to="/Personal/address"
              is-link
              value="修改/添加">
            </mt-cell>


       <mt-button type="danger" size="large">提交</mt-button>
       <!--日期选框-->
       <mt-datetime-picker
                    ref="picker"
                    type="date"
                    v-model="pickerValue"
                    @confirm="handleConfirm">
        </mt-datetime-picker>
        <!--日期选框结束-->
        <!--性别选框-->
        <mt-actionsheet
                  :actions="actions"
                  v-model="sheetVisible" cancelText="取消">
        </mt-actionsheet>
        <!--性别选框结束-->
       </div>
  </div>
</template>

<script>
import { Header,Field } from 'mint-ui';
import { Picker } from 'mint-ui';
import { Cell } from 'mint-ui';
import { Actionsheet } from 'mint-ui';
import { DatetimePicker } from 'mint-ui';
export default{
     name:'personalDetails',

     data:function(){
        return {
            sexy:'',
            actions:[
               {
                name:'男',
                method:()=>{
                    this.sexy="男";
                    this.$store.dispatch('uploadBirthday',{
                        $http:this.$http,
                        data:{
                            gender:this.sexy
                           /* birthday:this.EditUserInfo.birthday,
                            shippingAddress:this.EditUserInfo.shippingAddress*/
                        }
                     });
                }

               },
               {
                name:'女',
                 method:()=>{
                   this.sexy="女";
                    this.$store.dispatch('uploadBirthday',{
                        $http:this.$http,
                        data:{
                            gender:this.sexy
                           /* birthday:this.EditUserInfo.birthday,
                            shippingAddress:this.EditUserInfo.shippingAddress*/
                        }
                     });
                 }
               }
            ],
            sheetVisible:false,
            pickerValue:'',
            userBirthday:''
          /*  birthday:''*/

        }
     },
     methods:{
         onValuesChange(){
             console.log(11);
         },
         checkSex(){
            this.sheetVisible=!this.sheetVisible;
         },
         chooseBirthday(){
              this.$refs.picker.open();
         },
         handleConfirm(){
             this.$refs.picker.close();
             //console.log(typeof(this.pickerValue));
             this.userBirthday=this.pickerValue.getFullYear()+'-'+(this.pickerValue.getMonth()+1)+'-'+this.pickerValue.getDate();
             this.$store.dispatch('uploadBirthday',{
                $http:this.$http,
                data:{
                    birthday:this.userBirthday
                  /*  gender:this.EditUserInfo.gender,
                    shippingAddress:this.EditUserInfo.shippingAddress*/
                }
             });
         }

     },
     created(){
        this.$store.dispatch('get_EditUserInfo', {
            $http: this.$http
        });
     },
     computed:{
        EditUserInfo(){
            return this.$store.getters.EditUserInfo;
        }
     }

}

</script>

<style>
    .details_content{
         margin-top:50px;
    }
    .mint-cell-wrapper{
        text-align: left;
    }
</style>
