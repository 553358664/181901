<template>
   <div class="follow">
       <Header-com/>
       <Content-com/>
        这里是关注
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
        padding:0 .24rem;
    }
</style>
