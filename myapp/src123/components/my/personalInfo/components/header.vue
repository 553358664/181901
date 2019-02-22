<template>
    <div class="header">
        <img class="back" :src="back"  @click="handleback()"/>
        <p class="info-middle">个人信息</p>
        <p class="keep">保存</p>
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
        justify-content: space-between;
        align-items: center;
    }
    .back{
        width:.34rem;
        height:.34rem;
    }
    p{
        font-size: .32rem;
    }
</style>


