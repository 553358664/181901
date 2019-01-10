<template>
    <div class="personalInfo">
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
    .personalInfo{
        width:100%;
        height:100%;
        background:#EEEEEE;
    }
</style>
