<template>
    <div class="my">
        <router-view/>
        <MyInfo-com/>
        <MyClassify-com/>
        <MyList-com/>
    </div>
</template>
<script>
import MyInfo from './components/myInfo.vue';
import MyClassify from './components/myClassify.vue';
import MyList from './components/myList.vue';
export default {
    components:{
        "MyInfo-com":MyInfo,
        "MyClassify-com":MyClassify,
        "MyList-com":MyList
    }
}
</script>
<style>

</style>