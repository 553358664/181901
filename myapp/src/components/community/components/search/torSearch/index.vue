<template>
    <div class="torSearch"> 
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

