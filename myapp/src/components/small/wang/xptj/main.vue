<template>
	<div id="main_xptj">
		<h2 id="title_xptj">新年开运小红花</h2>
		<h3 id="list_xptj">2018年你辛苦了，2019年继续加油</h3>
		<div class="main_tj" v-for="(item,index) in result">
			<div class="main_timg"><img :src="item.picpath" alt="" /></div>
			<p class="p3">{{item.content[0]}}</p>
			<p class="p4">{{item.content[1]}}</p>
			<p class="p5">{{item.content[2]}}</p>
		</div>
	</div>
</template>
<script>
    import axios from "axios";
    export default{
    	data(){
    		return {
    			result:[]
    		}
    	},
    	created(){
    		axios({
    			url:"http://localhost:3000/data4"
    		})
    		.then((data)=>{
    			this.result=data.data;
    		})
    	}
    }
</script>
<style>
    #main_xptj{
    	padding-top:0.88rem;
    }
    #main_xptj > #title_xptj{
    	height:1.08rem;
    	width:100%;
    	padding-left:0.25rem;
    	line-height:1.05rem;
    	color:#0A0A0A;
    	font-size:0.34rem;
    }
    #main_xptj > #list_xptj{
    	font-size:0.28rem;
    	color:#0A0A0A;
    	border-left:0.02rem solid #C4D42C;
    	margin-left:0.24rem;
    	margin-bottom:0.4rem;
    }
    #main_xptj>.main_tj{
		width:100%;
		width:7.02rem;
		height:5.24rem;
		margin-left:0.22rem;
		text-align:center;
		border:0.01rem solid red;
		margin-bottom:0.6rem;
	}
	#main_xptj>.main_tj>.main_timg{
		width:100%;
		height:3.04rem;
		border:0.01rem solid #000;
	}
	#main_xptj>.main_tj>.main_timg>img{
		width:100%;
		height:100%;
	}
	#main_xptj>.main_tj>.p3{
		width:100%;
		height:0.96rem;
		line-height:1.4rem;
		font-size:0.24rem;
		color:#0A0A0A;
	}
	#main_xptj>.main_tj>.p4{
		font-size:0.22rem;
		color:#0A0A0A;
	}
	#main_xptj>.main_tj>.p5{
		margin-top:0.15rem;
		font-size:0.22rem;
		color:#F44C36;
	}
</style>