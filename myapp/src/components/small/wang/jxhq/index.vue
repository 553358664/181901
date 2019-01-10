<template>
	<div id="app_jxhq">
		<Head-com/>
		<div class="wrapper" ref="wrapper_jxhq">
			<div class="content">
				<Main-com/>
				<Foot-com/>
			</div>
		</div>
	</div>
</template>
<script>
	import head from "./head";
	import main from "./main";
	import foot from "./foot";
	import BScroll from "better-scroll";
	export default{
		components:{
			"Head-com":head,
			"Main-com":main,
			"Foot-com":foot
		},
		mounted(){
			if(!this.scroll){
				this.scroll = new BScroll(this.$refs.wrapper_jxhq,{
					
				})
			}
			console.log(this.scroll)
		}
	}
</script>
<style>
	#app_jxhq{
		width:100%;
		height:100%;
	}
	#app_jxhq>.wrapper{
		height:100%;
		width:100%;
	}
	#app_jxhq>.wrapper>.content{
		height:auto;
		padding-top:0.88rem;
	}
</style>