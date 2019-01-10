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
        padding:0 .24rem;
        background:#FCFCFA
    }
</style>
