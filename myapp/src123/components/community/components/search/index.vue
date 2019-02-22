<template>
    <div class="searchWrp">
        <torSearch-com/>
    </div>
</template>

<script>
export default {
    created(){

    },
    components:{
        "torSearch-com":()=>import('./torSearch')
    }
   
}
</script>
<style lang="scss" scoped>
    .searchWrp{
        height:100%;
        background:#EEEEEE;
    }
</style>
