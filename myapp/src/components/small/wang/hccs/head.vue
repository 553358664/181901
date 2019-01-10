<template>
	<div id="head_hccs">
		<i>&lt;</i>
	</div>
</template>
<script>
    import axios from "axios";
	export default{
	}
</script>
<style>
	#head_hccs{
		height:0.88rem;
		width:100%;
		background:#fff;
		display:flex;
		align-items:center;
		position:fixed;
		top:0;
		left:0;
		z-index:5;
	}
	#head_hccs>i{
		font-style:normal;
		display:block;
		height:0.3rem;
		width:0.2rem;
		font-size:0.3rem;
		margin-left:0.25rem;
		color:#2C2C2C;
	}
</style>