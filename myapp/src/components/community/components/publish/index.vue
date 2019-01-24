<template>
    <div class="publish">
        <img :src="pic" alt="">
        <div class="seaHeader">
            <div class="publishImg">
                <img src="../../../../assets/community/qiu/back.png" alt="" @click="handleBack()" >
            </div>
            <p class="publishTit" @click="handlepublish()">发布</p>
        </div> 
        <div class="publishMain">
            <div contenteditable="true" class="publishInp" >{{publishMain}}</div>
            <div class="publichAdd">
                <img src="../../../../assets/community/qiu/img.png" alt="" class="pub-left publishPer">
                <div class="publichAdd-son  pub-left" @click="handleAdd()">                   
                    <img src="../../../../assets/community/qiu/add.png" alt="" class="publichAdd-img">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Vuex from "vuex"
    export default {
        data(){
            return{
                publishMain:"zhang",
                pic:""
            }
        },
        methods:{
            ...Vuex.mapActions({
                handlepublish:"communty/handlepublish"
            }),
            handleBack(){
                this.$router.back()
            },
            handleAdd(){
                
            }
        }
    }
</script>
<style lang="scss" scoped>
    .publish{
        background:#FCFCFA;
        height:100%;
        .seaHeader{
            padding:0 4%;
            width:100%;
            height:1.02rem;
            display: flex;
            justify-content: space-between;
            align-items:center;
            box-shadow:.01rem .02rem .04rem 0rem rgba(0, 0, 0, 0.06);
            .publishImg{
                img{
                width:.22rem;
                height:.44rem;
                }
            }
            .publishText{
                width:5.45REM;
                height:.64rem;
            
            }
            .publishTit{
                width:auto;
                height:.32rem;
                font-size:.32rem;
                font-family:PingFang-SC-Bold;
                font-weight:bold;
                color:rgba(7,7,7,1);
                margin-bottom:.13rem;
                margin-right:.12rem;
            }
        }
        .publishMain{
            height:100%;
            .publishInp{
                overflow:auto;
                border:0;
                min-height:18.7%;
                max-height:45%;
                width:100%;
                resize:none;
                background:#FCFCFA;
                padding:.3rem;
                font-size:.32rem;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(10,10,10,1);
                opacity:0.8;
            }
            .publichAdd{
                .pub-left{
                    float:left;
                    margin-left:.3rem;
                } 
                .publishPer{
                    width:2.2rem;
                    height:2.2rem;
                }               
               .publichAdd-son{
                   position: relative;
                   width:2.2rem;
                    height:2.2rem;
                    border:2px solid rgba(215,215,215,1);
                    .publichAdd-img{
                        position: absolute;
                        top:.6rem;
                        left:.6rem;
                    }
               } 
            }
        }
    }
    
</style>
