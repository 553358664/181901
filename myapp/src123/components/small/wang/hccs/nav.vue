<template>
	        <div id="nav_hccs">
				<h3 @click="handleBs(-1)">冬季限定</h3>
				<ul v-for="(item,index) in flowerName">
					<li @click="handleBs(index);handleClick(index)" ref="li" :class='(num==index)?"active":""'>{{item}}</li>
				</ul>
			</div>
</template>
<script>
	import Vuex from "vuex";
    import axios from "axios";
	export default{
		data(){
			return{
				flag:false,
				num:-1
			}
		},
		computed:{
			...Vuex.mapState({
				flowerName:state=>state.small.flowerName
			})
		},
		methods:{
			handleBs(index){
				this.num=-1;
				let y=0;
				switch(index){
					case -1:
					      y=-711;break;
					case 0 :
					      y=-1080;break;
					case 1 :
					      y=-1480;break;
					case 2 :
					      y=-1690;break;
					case 3 :
					      y=-2090;break;
					case 4 :
					      y=-2310;break;
					case 5 :
					      y=-2700;break;
					
				}
				this.$emit("handleTo",y)
			},
			handleClick(index){
				this.num=index;
			}
		}
	}
</script>
<style>
	#nav_hccs{
		width:1.2rem;
		height:auto;
		/*position:fixed;
		top:0.88rem;
		left:0;*/
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
	#nav_hccs>ul>.active{
		background:#c33;
		width:1.1rem;
		height:0.7rem;
		padding-left:0.1rem;
		line-height:0.7rem;
		color:#0A0A0A;
		font-size:0.2rem;
		border-left:0.02rem solid #F44C36;
	}
</style>