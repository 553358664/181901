<template>
	<div id="app_hccs">
		<Head-com/>
		<Banner-com/>
		<Main-com/>
	</div>
</template>
<script>
    import Head from "./head.vue";
    import Main from "./main.vue";
    import Banner from "./banner.vue";
	export default{
		components:{
			"Head-com":Head,
			"Main-com":Main,
			"Banner-com":Banner
		}
	}
</script>
<style scoped>
	#app_hccs{
		width:100%;
		height:12rem;
	}
</style>