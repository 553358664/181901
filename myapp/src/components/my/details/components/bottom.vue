<template>
    <div class="bottom">
         <div class="bottomPage1">
            <p>个人主页</p>
            <img :src="iconRight"/>
        </div>
        <div class="line"></div>
        <div class="bottomPage2">
            <p>更多</p>
            <img :src="iconRight"/>
        </div>
        <div class="send">
             <button @click="handleClick()">发消息</button>
        </div>
       
    </div>
</template>

<script>
export default {
     data(){
        return{
            iconRight:require('@/assets/my/icon_grxx_jt@2x.png')
        }
    },
    methods:{
        //跳到聊天界面
        handleClick(){
            this.$router.push({path:'/chatbox'});
        }
    }
}
</script>

<style lang="scss" scoped>
    .bottom{       
        padding:.24rem 0 .24rem .24rem;
        margin-top: .2rem;
        background:#FCFCFA ;
        height:2.2rem;
    }
    .bottomPage1{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width:100%;
        height:1rem;
        padding-right:.24rem;
        img{
            width:.24rem;
            height:.24rem;
        }
    }
    .bottomPage2{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width:100%;
        height:.8rem;
        padding-right:.24rem;
        img{
            width:.24rem;
            height:.24rem;
        }
    }
    .bottomPage1>p,.bottomPage2>p{
        font-size:.28rem;
    }
    .line{
        width:100%;
        height:.01rem;
        float:right;
        background:#D6D6D6;
    }
    .send{
        width:100%;
        height:3rem;
        display: flex;
        justify-content: center;
        margin-top: .5rem;
        button{
            width:3rem;
            height:.88rem;
            font-size:.32rem;
            color:#FFF;
            background:#E35842 ;
            border: none;
            border-radius: .2rem;
            outline:none
        }
    }
    
</style>


