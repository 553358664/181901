<template>
    <div class="draft">
       <Header-com/>
       <Content-com/>
       <!-- <div class="zero">
           <p>你还没有草稿哦</p>
           <p>快去发表自己的养花小心得吧</p>
       </div> -->
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
<style scoped lang='scss'>
    .draft{
        width:100%;
        height:100%;
        position: relative;
        background:url(../../../assets/community/qiu/draft.png) no-repeat center #eeeeee;
    }
</style>