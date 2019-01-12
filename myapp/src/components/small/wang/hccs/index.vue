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
    import Vuex from "vuex";
    import axios from "axios";
    import Head from "../../components/goodsDetail/header";
    import Main from "./main.vue";
    import Banner from "./banner.vue";
    import BScroll from "better-scroll";
	export default{
		components:{
			"Head-com":Head,
			"Main-com":Main,
			"Banner-com":Banner
		},
		computed:{
			...Vuex.mapState({
				 result:state=>state.small.result
			})
		},
		mounted(){
			
				this.scroll=new BScroll(this.$refs.wrapper_hccs,{
					pullUpLoad:true
				});
				this.scroll.on("pullingUp",()=>{
					this.handleUpdate();
			    })
			
		},
		watch:{
			result(newVal,oldVal){
				this.scroll.finishPullUp();
				this.scroll.refresh();
			}
		},
		methods:{
			...Vuex.mapActions({
				handleUpdate:"small/handleUpdate"
			})
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