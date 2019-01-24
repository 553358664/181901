<template>
	        <div id="nav_hccs">
				<h3>冬季限定</h3>
				<ul v-for="(item,index) in flowerName">
					<li>{{item}}</li>
				</ul>
			</div>
</template>
<script>
	import Vuex from "vuex";
    import axios from "axios";
	export default{
		data(){
			return{
				flag:false
			}
		},
		computed:{
			...Vuex.mapState({
				flowerName:state=>state.small.flowerName
			})
		}
	}
</script>
<style>
	#nav_hccs{
		width:1.2rem;
		height:auto;
		position:fixed;
		top:0.88rem;
		left:0;
	}
	#nav_hccs>h3{
		width:1.1rem;
		height:0.7rem;
		padding-left:0.1rem;
		line-height:0.7rem;
		color:#0A0A0A;
		font-size:0.2rem;
		border-left:0.02rem solid #F44C36;
	}
	#nav_hccs>ul>li{
		width:1.1rem;
		height:0.7rem;
		padding-left:0.1rem;
		line-height:0.7rem;
		color:#0A0A0A;
		font-size:0.2rem;
		background:#E5E5E5;
		margin:0.01rem 0;
	}
</style>