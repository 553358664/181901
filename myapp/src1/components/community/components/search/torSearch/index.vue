<template>
    <div class="loginSearch"> 
        <input-com/>   
        <list-com/>
    </div>
</template>
<script>
export default {
    components:{
        "input-com":()=>import("./input"),
        "list-com":()=>import("./list")
    }
}
</script>
<style lang="scss" scoped>
    .loginSearch{
        height:100%;
    }
</style>
