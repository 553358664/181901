<template>
    <div class="news">
       <Header-com/>
       <Content-com/>
    </div>
</template>

<script>
import Header from "./components/header";
import Content from "./components/content"
export default {
    components:{
        "Header-com":Header,
        "Content-com":Content
    }
}
</script>
<style>
    .news{
        height:100%;
        width:100%;
        background:#EEEEEE
    }
</style>
