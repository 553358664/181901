<template>
	<div id="main_dpxx">
		 <div class="dpxx_top dpxx_specical">
		 	<p class="dpxx_p1"><i></i>认证说明</p>
		 	<p class="dpxx_p2">店铺已通过实名认证</p>
		 </div>
		 <div class="dpxx_top">
		 	<p class="dpxx_p1"><i></i>店铺名称</p>
		 	<p class="dpxx_p2">花7</p>
		 </div>
		 <div class="dpxx_top">
		 	<p class="dpxx_p1 dpxx_padding">创建时间</p>
		 	<p class="dpxx_p2">2016-01-22</p>
		 </div>
		 <div class="dpxx_top">
		 	<p class="dpxx_p1 dpxx_padding">认证类型</p>
		 	<p class="dpxx_p2">企业</p>
		 </div>
		 <div class="dpxx_top">
		 	<p class="dpxx_p1 dpxx_padding">企业名称</p>
		 	<p class="dpxx_p2">花7生活（北京）电子商务有限公司</p>
		 </div>
	</div>
</template>
<script>
    export default{
    	
    }
</script>
<style>
     #main_dpxx{
     	width:100%;
     	height:auto;
     	padding:0 0.25rem;
     }
     #main_dpxx>.dpxx_top{
     	height:1.3rem;
     	width:100%;
     }
     #main_dpxx>.dpxx_specical{
     	border-bottom:0.01rem solid #B1B1B1;
     }
     #main_dpxx>.dpxx_top>.dpxx_p1{
     	height:0.3rem;
     	width:100%;
     	margin:0.2rem 0 0.2rem;
     	font-size:0.28rem;
     	float:left;
     	color:#0A0A0A;
     	font-weight:bold;
     }
     #main_dpxx>.dpxx_top>.dpxx_padding{
     	padding-left:0.3rem;
     }
     #main_dpxx>.dpxx_top>.dpxx_p1>i{
     	display:inline-block;
     	height:0.3rem;
     	width:0.3rem;
     	background:red;
     	vertical-align:bottom;
     }
     #main_dpxx>.dpxx_top>.dpxx_p2{
     	width:100%;
     	height:0.3rem;
     	font-size:0.28rem;
     	float:left;
     	color:#414141;
     	padding-left:0.3rem;
     }
</style>