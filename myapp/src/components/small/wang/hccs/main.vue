<template>
	<div id="main_hccs">
		<div id="list_support">
			<div id="list_hccs" v-show="!val">
				<h3>冬季限定</h3>
				<ul v-for="(item,index) in flowerName">
					<li>{{item}}</li>
				</ul>
			</div>
		</div>
		<div id="classify">
			<div class="classify" v-for="(item,index) in result">
				<h3>{{item.name}}</h3>
				<div class="classify_hccs">
					<div class="classify_l_hccs"><img :src="item.picpath[0]" /></div>
					<div class="classify_c_hccs">
						<p class="p1">{{item.word[0]}}</p>
						<p class="p2">{{item.price[0]}}</p>
					</div>
					<div class="classify_r_hccs">
						<span></span>
					</div>
				</div>
				<div class="classify_hccs" v-show="item.picpath.length>1?flag:!flag">
					<div class="classify_l_hccs"><img :src="item.picpath[1]" /></div>
					<div class="classify_c_hccs">
						<p class="p1">{{item.word[1]}}</p>
						<p class="p2">{{item.price[1]}}</p>
					</div>
					<div class="classify_r_hccs">
						<span></span>
				    </div>
				
			    </div>
		
		    </div>
		</div>
		
	</div>
</template>
<script>
    import Vuex from "vuex";
    import axios from "axios";
	export default{
		data(){
			return{
				flag:true
			}
		},
		props:{
			val:Boolean
		},
		computed:{
			...Vuex.mapState({
				
				result:state=>state.small.result,
				flowerName:state=>state.small.flowerName
			})
		},
		methods:{
			
			...Vuex.mapActions({
				handleLoad:"small/handleLoad"
			}),
			//handleLoad(){
				/*axios({
					url:"http://localhost:3000/data1"
				})
				.then((data)=>{
					this.result = data.data;
				});*/
				
				/*axios({
					url:"http://localhost:3000/data2"
				})
				.then((data)=>{
					this.flowerName = data.data;
				});*/
//				axios({
//					url:"/api/mock/5c3465e17db0f179db202941/example/flower"
//				})
//				.then((data)=>{
//					this.result = data.data.data;
//					this.flowerName = data.data.data2;
//				})
//				
//			}
		},
		created(){
			this.handleLoad();
			    
		},
	}
</script>
<style>
	#main_hccs{
		width:100%;
		height:auto;
		display:flex;
		justify-content:space-between;
		margin-top:0.14rem;
		background:#FCFCFA;
	}
	#list_support{
		width:1.2rem;
		height:auto;
	}
	#list_hccs{
		width:1.2rem;
		height:auto;
	}
	#list_hccs>h3{
		width:1.1rem;
		height:0.7rem;
		padding-left:0.1rem;
		line-height:0.7rem;
		color:#0A0A0A;
		font-size:0.2rem;
		border-left:0.02rem solid #F44C36;
	}
	#list_hccs>ul>li{
		width:1.1rem;
		height:0.7rem;
		padding-left:0.1rem;
		line-height:0.7rem;
		color:#0A0A0A;
		font-size:0.2rem;
		background:#E5E5E5;
		margin:0.01rem 0;
	}
	#classify{
		height:auto;
		width:6rem;
	}
	.classify{
		width:6rem;
	    height:auto;
		background:#FCFCFA;
	}
	.classify>.classify_hccs{
		height:1.5rem;
		margin-bottom:0.24rem;
	}
	.classify>h3{
		height:0.44rem;
		font-size:0.2rem;
		color:#0A0A0A;
	}
	.classify>.classify_hccs>.classify_l_hccs{
		width:1.5rem;
		height:1.5rem;
		float:left;
	}
	.classify>.classify_hccs>.classify_l_hccs>img{
		width:100%;
		height:100%;
	}
	.classify>.classify_hccs>.classify_c_hccs{
		padding-left:0.4rem;
		width:3.1rem;
		float:left;
	}
	.classify>.classify_hccs>.classify_c_hccs>.p1{
		height:0.25rem;
		color:#0A0A0A;
		font-size:0.24rem;
	}
	.classify>.classify_hccs>.classify_c_hccs>.p2{
		font-size:0.24rem;
		color:#F44C36;
		margin-top:0.9rem;
	}
	.classify>.classify_hccs>.classify_r_hccs{
		width:1rem;
		height:1.5rem;
		float:left;
	}
	.classify>.classify_hccs>.classify_r_hccs>span{
		display:block;
		height:0.28rem;
		width:0.28rem;
		background:#000;
		margin-top:1.1rem;
		margin-left:0.35rem;
	}
</style>