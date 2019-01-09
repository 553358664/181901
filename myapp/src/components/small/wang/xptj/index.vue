<template>
	<div id="app_xptj">
		<Head-com/>
		<Main-com/>
	</div>
</template>
<script>
    import Head from "./head.vue";
    import Main from "./main.vue";
	export default{
		components:{
			"Head-com":Head,
			"Main-com":Main,
 	    }
	}
</script>
<style scoped>
	#app_xptj{
		width:100%;
		height:12rem;
	}
</style>