<template>
	<div id="main_jxhq">
		<h2>花器专场</h2>
		<p id="p1"><span>新品推荐</span></p>
		<p id="p2">瞬间变身插花大师的插花神器</p>
		<div id="main_t">
			<div id="main_timg"><img src="static/wjlpic/pic5.png" alt="" /></div>
			<p id="p3">「小神灯」花器组合</p>
			<p id="p4">花瓶+插花神器的组合，一次满足你关于插花的脑洞</p>
			<p id="p5">88元/套</p>
		</div>
		<div class="main_m" v-for="(item,index) in result">
			<p class="p6" ><span>{{item.title}}</span></p>
			<ul>
				<li class="main_li">
					<div class="main_pic"><img :src="item.content[0].picpath" alt="" /></div>
					<p class="p7">{{item.content[0].picword[0]}}</p>
					<p class="p8">{{item.content[0].picword[1]}}</p>
					<p class="p9">{{item.content[0].picword[2]}}</p>
				</li>
				<li class="main_li">
					<div class="main_pic"><img :src="item.content[1].picpath" alt="" /></div>
					<p class="p7">{{item.content[1].picword[0]}}</p>
					<p class="p8">{{item.content[1].picword[1]}}</p>
					<p class="p9">{{item.content[1].picword[2]}}</p>
				</li>
			</ul>
		</div>
		<div id="foot_jxhq">
		           一直幸福到底
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
			axios({
				url:"http://localhost:3000/data3"
			})
			.then((data)=>{
				this.result = data.data;
			})
	    },
		methods:{
			
		}
	}
</script>
<style>
    #foot_jxhq{
    	width:100%;
    	height:1.43rem;
		line-height:1.43rem;
		text-align:center;
		color:#999999;
		font-size:0.24rem;
		position:fixed;
		bottom:0;
		left:0;
    }
    #main_jxhq{
    	overflow-x:hidden;
    	height:11rem;
    }
	#main_jxhq>h2{
		height:1.07rem;
		line-height:0.95rem;
		padding-left:0.25rem;
		width:100%;
		font-size:0.34rem;
		color:#0A0A0A;
		font-weight:bold;
	}
	#main_jxhq>#p1{
		width:100%;
		font-size:0.28rem;
		color:#0A0A0A;
		font-weight:bold;
		margin-left:0.24rem;
		border-left:0.02rem solid #F44C36;
	}
	#main_jxhq>#p1>span{
		margin-left:0.04rem;
		color:#0A0A0A;
	}
	#main_jxhq>#p2{
		width:100%;
		font-size:0.22rem;
		height:0.74rem;
		line-height:0.51rem;
		padding-left:0.25rem;
		color:#0A0A0A;
		
	}
	#main_jxhq>#main_t{
		width:100%;
		width:7.02rem;
		height:5.24rem;
		background:#D6D6D6;
		margin-left:0.22rem;
		text-align:center;
	}
	#main_jxhq>#main_t>#main_timg{
		width:100%;
		height:3.04rem;
		border:0.01rem solid #000;
	}
	#main_jxhq>#main_t>#main_timg>img{
		width:100%;
		height:100%;
	}
	#main_jxhq>#main_t>#p3{
		width:100%;
		height:0.96rem;
		line-height:1.4rem;
		font-size:0.24rem;
		color:#0A0A0A;
	}
	#main_jxhq>#main_t>#p4{
		font-size:0.22rem;
		color:#0A0A0A;
	}
	#main_jxhq>#main_t>#p5{
		margin-top:0.15rem;
		font-size:0.22rem;
		color:#F44C36;
	}
	#main_jxhq>.main_m{
	    padding: 0 0.22rem;
	    height:6 rem;
	    width:100%;
	}
	#main_jxhq>.main_m>.p6{
		height:1.06rem;
		width:100%;
	}
	#main_jxhq>.main_m>.p6>span{
		padding-left:0.04rem;
		display:inline-block;
		height:0.3rem;
		border-left:0.02rem solid #F44C36;
		margin-top:0.38rem;
		font-size:0.28rem;
		color:#0A0A0A;
	}
	#main_jxhq>.main_m >ul{
		display:flex;
		justify-content:space-between;
	}
	#main_jxhq>.main_m>ul>li{
		width:3.4rem;
		text-align:center;
		border:0.01rem solid #000;
		border-radius:0.06rem;
	}
	#main_jxhq>.main_m>ul>li>.main_pic{
		width:100%;
		height:3.44rem;
	}
	#main_jxhq>.main_m>ul>li>.main_pic>img{
		width:100%;
		height:100%;
	}
	#main_jxhq>.main_m>ul>li>.p7{
		height:1.17rem;
		line-height:1.79rem;
		font-size:0.23rem;
		color:#0A0A0A;
	}
	#main_jxhq>.main_m>ul>li>.p8{
		font-size:0.22rem;
		color:#0A0A0A;
	}
	#main_jxhq>.main_m>ul>li>.p9{
		font-size:0.22rem;
		color:#F44C36;
		height:1.15rem;
		line-height:0.5rem;
	}
</style>