<template>
	<div id="main_hccs">
		<div id="list_hccs">
			<h3>冬季限定</h3>
			<li>玫瑰</li>
			<li>玫瑰</li>
			<li>玫瑰</li>
			<li>玫瑰</li>
		</div>
		<div id="classify">
			<div class="classify" v-for="(item,index) in result">
				<h3>{{item.name}}</h3>
				<div class="classify_hccs">
					<div class="classify_l_hccs"><img :src="item.picpath" /></div>
					<div class="classify_c_hccs">
						<p class="p1">{{item.word}}</p>
						<p class="p2">{{item.price}}</p>
					</div>
					<div class="classify_r_hccs">
						<span></span>
					</div>
				</div>
			</div>
			
			<div class="classify" v-for="(item,index) in result">
				<h3>{{item.name}}</h3>
				<div class="classify_hccs">
					<div class="classify_l_hccs"><img :src="item.picpath" /></div>
					<div class="classify_c_hccs">
						<p class="p1">{{item.word}}</p>
						<p class="p2">{{item.price}}</p>
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
    import axios from "axios";
	export default{
		data(){
			return{
				result:[]
			}
		},
		created(){
			this.handleLoad();
		},
		methods:{
			handleLoad(){
				axios({
					url:"http://localhost:3000/data1"
				})
				.then((data)=>{
					this.result = data.data;
				})
			}
		}
	}
</script>
<style>
	#main_hccs{
		width:100%;
		height:20rem;
		overflow:auto;
		display:flex;
		justify-content:space-between;
		margin-top:0.14rem;
		background:#FCFCFA;
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
	#list_hccs>li{
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
		height:2.5rem;
		background:#FCFCFA;
	}
	.classify>.classify_hccs{
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
		background:orange;
		float:left;
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