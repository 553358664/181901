<template>
	<div id="app_dpxx">
			<Head-com/>
			<Main-com/>
			<Foot-com/>
	</div>
</template>
<script>
    import Head from "./head.vue";
    import Main from "./main.vue";
    import Foot from "../hccs/foot.vue";
	export default{
		components:{
			"Head-com":Head,
			"Main-com":Main,
			"Foot-com":Foot
 	   }
 	   
	}
</script>
<style>
	#app_dpxx{
		width:100%;
		height:100%;
	}
</style>