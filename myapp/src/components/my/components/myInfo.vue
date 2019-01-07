<template>
    <div class="myInfo">
      
            <div class="userImg">
                <router-link :to="{name:'personalInfo'}">
                    <img src="static/my/wd_tx@2x.png"/>
                </router-link>
                <router-view/>
            </div>
            <p class="userName">小小爱花者</p>
       
    </div>
</template>

<script>
export default {
   
}
</script>

<style lang="scss" scoped>
    .myInfo,.myInfo>a{
        width:100%;
        height:3.75rem;
        background: url("../../../../static/my/wd-bj@2x.png") no-repeat;
    }
    .userImg,{
        width:100%;
        height:2.24rem;
        display: flex;
        justify-content: center;
        align-items: center
    }
    .userImg>img{
        width:1.34rem;
        height:1.34rem;
        text-align: center
    }
    .userName{
        font-size: 0.34rem;
        text-align: center;
    }
</style>


