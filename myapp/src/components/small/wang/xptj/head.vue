<template>
	<div id="head_xptj">
		<i @click="handleTo()">&lt;</i><span>花7</span>
	</div>
</template>
<script>
	export default{
		methods:{
			handleTo(){
				this.$router.push("/jxhq");
			}
		}
	}
</script>
<style>
    #head_xptj{
		height:0.88rem;
		width:100%;
		display:flex;
		align-items:center;
		font-weight:bold;
		font-size:0.32rem;
		color:#0A0A0A;
		position:fixed;
		top:0;
		left:0;
		z-index:5;
		background:#fff;
	}
	#head_xptj>i{
		display:inline-block;
		height:0.3rem;
		width:0.2rem;
		margin:0 3rem 0 0.3rem;
	}
	#head_xptj>span{
		display:inline-block;
		height:0.3rem;
		width:0.5rem;
	}
</style>