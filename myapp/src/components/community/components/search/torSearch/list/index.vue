<template>
    <div class="searchIndex">
        <history-com/>
        <hot-com/>
    </div>    
</template>
<script>
export default {
    components:{
        "hot-com":()=>import("./hot"),
        "history-com":()=>import("./history")
    }
}
</script>
<style scoped lang="scss">
    .searchIndex{
        height:100%
    }
</style>
