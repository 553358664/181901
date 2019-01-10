<template>
	<div id="app_hccs">
		    <Head-com/>
		<div class="wrapper" ref="wrapper_hccs">
			<div class="content">
				<Banner-com/>
		        <Main-com/>
			</div>
		</div>
		
	</div>
</template>
<script>
    import Head from "./head.vue";
    import Main from "./main.vue";
    import Banner from "./banner.vue";
    import BScroll from "better-scroll";
	export default{
		components:{
			"Head-com":Head,
			"Main-com":Main,
			"Banner-com":Banner
		},
		mounted(){
			if(!this.scroll){
				this.scroll=new BScroll(this.$refs.wrapper_hccs,{})
			}
		}
	}
</script>
<style scoped>
	#app_hccs{
		width:100%;
		height:100%;
	}
	#app_hccs>.wrapper{
		height:100%;
		width:100%;
	}
	#app_hccs>.wrapper>.content{
		
	}
</style>