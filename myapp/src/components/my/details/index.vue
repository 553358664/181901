<template>
   <div class="details">
       <Header-com/>
       <Middle-com/>
       <Bottom-com/>
    </div>
    
</template>
<script>
import Header from "./components/header.vue";
import Middle from "./components/middle.vue";
import Bottom from "./components/bottom.vue"
export default {
    components:{
        "Header-com":Header,
        "Middle-com":Middle,
        "Bottom-com":Bottom
    }
}
</script>
<style>
     .details{
        width:100%;
        height:100%;
        background:#EEEEEE;
    }
</style>
