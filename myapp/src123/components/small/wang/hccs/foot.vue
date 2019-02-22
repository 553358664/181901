<template>
	<div id="foot_dpxx">
		<ul class="foot_dpxx">
			<li>店铺主页</li>
			<li>个人中心</li>
			<router-link to="/about"><li>关注我们</li></router-link>
			<router-link to="/dpxx"><li>店铺信息</li></router-link>
	    </ul>
	</div>
</template>
<script>
	
</script>

<style>
#foot_dpxx{
	width:100%;
	height:1rem;
	background:#EFEFEC;
	position:fixed;
	left:0;
	bottom:0;
	color:#0A0A0A;
}
#foot_dpxx>.foot_dpxx{
    	margin-top:0.3rem;
    	padding:0 1.3rem;
    	display:flex;
    	justify-content:space-between;
    }
#foot_dpxx>.foot_dpxx>li{
	font-size:0.24rem;
	color:#414141;
}
</style>