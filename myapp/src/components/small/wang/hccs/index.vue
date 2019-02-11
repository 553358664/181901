<template>
	<div id="app_hccs">
		    <Head-com/>
		<div class="wrapper" ref="wrapper_hccs">
			<div class="content">
				<Banner-com/>
		        <Main-com :val="flag"/>
			</div>
		</div>
		    <Nav-com v-show="flag"></Nav-com>
		<Foot-com/>
	</div>
</template>
<script>
    import Vuex from "vuex";
    import axios from "axios";
    import Head from "./head.vue";
    import Main from "./main.vue";
    import Banner from "./banner.vue";
    import Nav from "./nav.vue";
    import Foot from "./foot.vue";
    import BScroll from "better-scroll";
	export default{
		data(){
			return{
				flag:false
			}
		},
		components:{
			"Head-com":Head,
			"Main-com":Main,
			"Banner-com":Banner,
			"Nav-com":Nav,
			"Foot-com":Foot
		},
		computed:{
			...Vuex.mapState({
				 result:state=>state.small.result
			})
		},
		mounted(){
			
				this.scroll=new BScroll(this.$refs.wrapper_hccs,{
					pullUpLoad:true,
					probeType:2
				});
				this.scroll.on("pullingUp",()=>{
					this.handleUpdate();
			   });
			   this.scroll.on("scroll",({x,y})=>{
			    	if(y<-710){
			    		this.flag=true
			    	}else{
			    		this.flag=false
			    	}
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