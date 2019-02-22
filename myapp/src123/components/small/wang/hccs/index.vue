<template>
	<div id="app_hccs">
		    <Head-com/>
		<div class="wrapper" ref="wrapper_hccs">
			<div class="content">
				<Banner-com/>
		        <Main-com :val="flag" @handleTo="handleTo" />
			</div>
		</div>
		    <Nav-com :class="flag?'active':''" @handleTo="handleTo"></Nav-com>
		<Foot-com/>
	</div>
</template>
<script>
    import Vuex from "vuex";
    import axios from "axios";
    import Head from "../../components/goodsDetail/header";
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
					probeType:2,
					click:true
				});
				/*this.scroll.on("pullingUp",()=>{
					this.handleUpdate();
			   });*/
			   this.scroll.on("scroll",({x,y})=>{
			    	if(y<-710){
			    		this.flag=true
			    	}else{
			    		this.flag=false
			    	}
			    });
			  
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
			}),
			handleTo(val){
				this.scroll.scrollTo(0,val,300,"bounce")
			}
		}
		
	}
</script>
<style scoped>
    .active{
    	position:fixed;
		top:0.88rem;
		left:0;
    }
	#app_hccs{
		width:100%;
		height:100%;
	}
	#app_hccs>.wrapper{
		height:100%;
		width:100%;
	}
	#app_hccs>.wrapper>.content{
		padding-bottom:1rem;
	}
</style>