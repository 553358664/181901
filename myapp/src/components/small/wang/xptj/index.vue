<template>
	<div id="app_xptj">
			<Head-com/>
		<div class="wrapper" ref="wrapper_xptj">
			<div class="content">
				<Main-com/>
				<Foot-com/>
			</div>
	    </div>
	</div>
</template>
<script>
    import Head from "../../components/goodsDetail/header";
    import Main from "./main.vue";
    import BScroll from "better-scroll";
    import Foot from "./foot.vue";
	export default{
		components:{
			"Head-com":Head,
			"Main-com":Main,
			"Foot-com":Foot
 	   },
 	   mounted(){
 	   	   if(!this.scroll){
 	   	   	  this.scroll = new BScroll(this.$refs.wrapper_xptj,{
 	   	   	  	//scrollY:true
 	   	   	  })
 	   	   }
 	   }
	}
</script>
<style>
	#app_xptj{
		width:100%;
		height:100%;
	}
	#app_xptj>.wrapper{
		height:100%;
		width:100%;
	}
</style>