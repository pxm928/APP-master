<template>
	<mt-header style="background: #81d8d0" fixed :title="title"></mt-header>
</template>
<style>
	.mint-header{
		height: 50px;
		line-height: 50px;
		color: #fff;
		font-size: 20px;
		font-weight: bold;
		z-index: 999;
	}
</style>
<script>
import { Header } from 'mint-ui';
	export default{
		name:'HeaderOne',
		data(){
		    return{
		    }
		},
		computed:{
			title(){
				return this.$store.getters.gettitle;
			}
		}
	}
</script>