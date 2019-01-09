<template>
	<div class="serTer">
	<!--用户服务条款-->
		<div class="serContent">
			<ServiceTerms-com></ServiceTerms-com>
		</div>
	</div>
</template>
<script>
import ServiceTerms from "./components/serviceTerms.vue"
export default {
    components:{
    	"ServiceTerms-com":ServiceTerms
    }
}
</script>
<style lang="scss" scoped>
.serTer{
	width: 100%;
	height: 100%;
	background: #CCCCCC;
	.serContent{
		height: 2rem;
		width: 100%;
	}
}
</style>