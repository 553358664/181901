<template>
    <div class="header">
        <img class="back" :src="back" @click="handleback()"/> 
        <p>详细资料</p>
        <img class="more" :src="more"/> 
    </div>
</template>

<script>
export default {
    methods: {       
        handleback(){
            this.$router.back();
        }
    },
     data(){
       return{
           back:require('@/assets/my/icon_wd_jt@2x.png'),
           more:require('@/assets/my/icon_gwc_more@2x.png')
       }
   }
}
</script>

<style lang="scss" scoped>
     .header{
        width:100%;
        height:.98rem;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background:#FCFCFA;
        padding:0 .24rem;
        margin-bottom: .2rem;
    }
    .back{
        width:.34rem;
        height:.34rem;
    }
    .more{
        width:.48rem;
        height:.2rem;
    }
    p{
        font-size: .32rem;
        color:#0A0A0A ;
    }
</style>


