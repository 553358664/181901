<template>
    <div class="header">
        <img class="back" :src="back" @click="handleback()"/>
        <p class="info-middle">粉丝</p>
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
        align-items: center;
        background:#FCFCFA;
        padding:0 .24rem;
        margin-bottom: .2rem;
        position: fixed;
        z-index: 10;
    }
    .back{
        width:.34rem;
        height:.34rem;
        margin-right:2.7rem;
    }
    p{
        font-size: .32rem;
    }

</style>


