<template>
    <div class="searchWrp">
        <component :is="Search"></component>
    </div>
</template>

<script>
export default {
    components:{
        "loginSearch-com":()=>import('./loginSearch'),
        "torSearch-com":()=>import('./torSearch')

    },
    data(){
        return{
            Search:"torSearch-com"
        }
    },
    methods:{
        
    }
}
</script>
<style lang="scss" scoped>
    .searchWrp{
        height:100%;
        background:#EEEEEE;
    }
</style>
