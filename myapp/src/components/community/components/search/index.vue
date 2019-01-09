<template>
    <div>
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
            Search:"loginSearch-com"
        }
    },
    methods:{
        
    }
}
</script>
<style lang="scss" scoped>

</style>
