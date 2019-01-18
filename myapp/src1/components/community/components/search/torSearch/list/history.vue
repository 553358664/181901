<template>
    <div class="searchHis">
         <div class="searchRecord">
            <p>历史纪录</p> 
            <img src="../../../../../../assets/community/qiu/del.png" alt="" @click="handleDel()">
         </div>
         <ul class="searchMain">
             <li class="searchList" v-for="(item,index) in navs" :key="index" ref="list">{{item}}</li>  
         </ul>
    </div>    
</template>
<script>
export default {
    data(){
        return{
            navs:[
                "花艺","小雷雷", "小琪琪","小聪聪", "小日军","小头头"
            ]
        }
    },
    methods:{
        handleDel(){
            this.navs=[]
        }
    }
}
</script>
<style scoped lang="scss">
    .searchHis{
         margin-top:.1rem;
        min-height:19.11%;
        max-height:27%;
        width:100%;
        background:#FCFCFA;
        overflow: hidden;
        .searchRecord{
            width:100%;
            height:auto;
            padding:3.4% 4% 0 4%;
            display:flex;
            justify-content: space-between;
            p{
                width:1.1rem;
                font-size:.26rem;
                font-family:PingFang-SC-Bold;
                font-weight:bold;
                color:rgba(7,7,7,1);                
            }
            img{
                width:.34rem;
                height:.39rem;
            }
        }
        .searchMain{
           padding:3.4% 8% 0 4%;
           overflow: hidden;
            .searchList{
                border:.01rem solid rgba(225,228,215,1);
                border-radius:.31rem;
                float:left;
                min-height:.62rem;
                font-size:.26rem;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(43,43,43,1);
                line-height:.62rem;
                padding:0 .2rem 0 .2rem;
                margin-left:.23rem;
                margin-bottom:.25rem;
            }
        }
    }
</style>