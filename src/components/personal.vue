<template lang="html">
<div class="personal">
 
   <router-view></router-view>
    
</div>
</template>

<script>

    export default {
        name:'personal',
        data:function(){
            return {
              /* user:{
                  id:'',
                  name:''
                
                 
               }*/
            }
        },
      
        created() {
            this.$store.commit('updateTabBarIndex', '/Person');

            if (!this.userInfo._id) {
                this.$router.push('/Login');
            } else {
                this.$router.push('/Personal/index');
            }
        },
        computed: {
            userInfo() {
                return this.$store.getters.userInfo;
            }
        }
    }
</script>
<style scoped>

 
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
        background-color:#26a2ff; 
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