<template>
   <div class="follow">
       <Header-com/>
       <Content-com/>
    </div>
       
    
</template>
<script>
import Header from "./components/header.vue";
import Content from "./components/content.vue"
export default {
    components:{
        "Header-com":Header,
        "Content-com":Content
    }
}
</script>
<style>
.follow{
    height:100%;
    width:100%;
    background:#EEEEEE
}
</style>
