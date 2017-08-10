<template>
<div>
    <mt-header title="修改用户名">
        <router-link to="/Personal/personalDetails" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
</div>
</template>

<script>
import { Field ,Header} from 'mint-ui';
    export default{
        name:'editName',
        data:function(){
             return {
                 editName:{
                    username:''
                 }
             }
        }
    }
</script>

<style>
    
</style>