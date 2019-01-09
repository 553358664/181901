<template>
	<div id="app">
		<Head-com/>
		<Main-com/>
		<Foot-com/>
	</div>
</template>
<script>
	import head from "./head";
	import main from "./main";
	import foot from "./foot";
	export default{
		components:{
			"Head-com":head,
			"Main-com":main,
			"Foot-com":foot
		}
	}
</script>
<style>
	#app{
		width:100%;
		height:100%;
	}
</style>