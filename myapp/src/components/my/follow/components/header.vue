<template>
    <div class="header">
        <img class="back" :src="back" @click="handleback()"/>       
        <p>关注</p>
    </div>
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
           back:require('@/assets/my/icon_wd_jt@2x.png')
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


