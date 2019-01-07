<template>
	<div id="main">
		<h2>花器专场</h2>
		<p id="p1"><span>新品推荐</span></p>
		<p id="p2">瞬间变身插花大师的插花神器</p>
		<div id="main_t">
			<div id="main_timg"></div>
			<p id="p3">「小神灯」花器组合</p>
			<p id="p4">花瓶+插花神器的组合，一次满足你关于插花的脑洞</p>
			<p id="p5">88元/套</p>
		</div>
		<div class="main_m">
			<p class="p6"><span>自然系列专属花器</span></p>
			<ul>
				<li class="main_li">
					<div class="main_pic"></div>
					<p class="p7">「小黑茶」电镀版花瓶</p>
					<p class="p8">未来感电镀工艺</p>
					<p class="p9">99/元</p>
				</li>
				<li class="main_li">
					<div class="main_pic"></div>
					<p class="p7">「小黑茶」电镀版花瓶</p>
					<p class="p8">未来感电镀工艺</p>
					<p class="p9">99/元</p>
				</li>
			</ul>
		</div>
		<div id="foot">
		           一直幸福到底
	    </div>
	</div>
</template>
<script>
	
</script>
<style>
    #foot{
    	height:1.43rem;
		line-height:1.43rem;
		text-align:center;
		color:#999999;
		font-size:0.24rem;
    }
    #main{
    	overflow:auto;
    	height:11rem;
    }
	#main>h2{
		height:1.07rem;
		background:yellow;
		line-height:0.95rem;
		padding-left:0.25rem;
		width:100%;
	}
	#main>#p1{
		width:100%;
		font-size:0.28rem;
		font-weight:bold;
		margin-left:0.24rem;
		border-left:0.02rem solid #F44C36;
	}
	#main>#p1>span{
		margin-left:0.04rem;
		color:#0A0A0A;
	}
	#main>#p2{
		width:100%;
		font-size:0.21rem;
		height:0.74rem;
		line-height:0.51rem;
		padding-left:0.25rem;
		color:#0A0A0A;
		
	}
	#main>#main_t{
		width:100%;
		width:7.02rem;
		height:5.24rem;
		background:#eee;
		margin-left:0.22rem;
		text-align:center;
	}
	#main>#main_t>#main_timg{
		width:100%;
		height:3.04rem;
		border:0.01rem solid #000;
	}
	#main>#main_t>#p3{
		width:100%;
		height:0.96rem;
		line-height:1.4rem;
		font-size:0.24rem;
		color:#0A0A0A;
	}
	#main>#main_t>#p4{
		font-size:0.22rem;
		color:#0A0A0A;
	}
	#main>#main_t>#p5{
		margin-top:0.15rem;
		font-size:0.22rem;
		color:#F44C36;
	}
	#main>.main_m{
	    padding: 0 0.22rem;
	}
	#main>.main_m>.p6{
		height:1.06rem;
		width:100%;
	}
	#main>.main_m>.p6>span{
		padding-left:0.04rem;
		display:inline-block;
		height:0.3rem;
		border-left:0.02rem solid #F44C36;
		margin-top:0.38rem;
		font-size:0.28rem;
		color:#0A0A0A;
	}
	#main>.mian_m{
		width:3.4rem;
		height:6 rem;
	}
	#main>.main_m>ul{
		display:flex;
		justify-content:space-between;
	}
	#main>.main_m>ul>li{
		width:3.4rem;
		text-align:center;
		border:0.01rem solid #000;
		border-radius:0.06rem;
	}
	#main>.main_m>ul>li>.main_pic{
		width:100%;
		height:3.44rem;
		background:yellow;
	}
	#main>.main_m>ul>li>.p7{
		height:1.17rem;
		line-height:1.79rem;
		font-size:0.23rem;
		color:#0A0A0A;
	}
	#main>.main_m>ul>li>.p8{
		font-size:0.22rem;
		color:#0A0A0A;
	}
	#main>.main_m>ul>li>.p9{
		font-size:0.22rem;
		color:#F44C36;
		height:1.15rem;
		line-height:0.5rem;
	}
</style>