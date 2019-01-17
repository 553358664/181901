<template>
    <div class="nearby wrapper" ref="homeWrapper">
        <ul class="content nearbyUl">
            <li class="nearbyLi" v-for="(item,index) in nearItems" :key="index">
                <div class="nearbyImg">
                   <img :src="item.articleCover" alt=""> 
                </div>   
                <div class="nearbyBox">
                    <p class="nearbyP">                      
                    {{item.articleTitle}}
                    </p>
                    <div class="nearbyUser">
                        <div class="uerImg">
                            <img src="../../../../assets\community\qiu\content_icon-like2.png" alt="">
                        </div> 
                        <p class="userName">{{item.username}}</p>  
                        <p class="userPraise">
                            <img src="../../../../assets\community\qiu\content_icon-like2.png" alt="">
                            <span class="praiseNum">{{item.praise}}</span>
                        </p>                     
                    </div>
                </div>            
            </li>
        </ul>
    </div>
</template>


<script>
import Vuex from "Vuex"
import BScroll from "better-scroll";
export default {
    created(){
       this.handleNearItems()
       
    },
    computed: {
    //获得附近中的文章数据
    ...Vuex.mapState({
      nearItems: state => state.community.nearItems
    })
  },
  methods:{
    ...Vuex.mapActions({
      handleNearItems: "community/handleNearItems"
    })
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.homeWrapper,{
        //只有设置成true pullingUp才能使用
        pullUpLoad:true,
        hasVerticalScroll: true
    })
  }
}
</script>
<style scoped lang="scss">
.nearby{
    background:#EEEEEE;
    width:100%;
    height:100%;
    overflow:hidden;
   .nearbyUl{
        overflow: hidden;
        zoom:1;  
        padding-bottom:3.2rem; 
        .nearbyLi{
            margin:1% 0 0 1%;
            width:48%;
            float:left;
            .nearbyImg{
                width:100%;
                img{
                    width:100%;
                }
            }
        .nearbyBox{
                width:100%;
                height:1.74rem;
                background:rgba(252,252,250,1);
                border-radius:0px 0px 10px 10px;
                .nearbyP{
                    margin-left:5.8%;
                    padding-top:2.64%;
                    width:79.9%;
                    height:.75rem;
                    font-size:.26rem;
                    font-family:PingFang-SC-Medium;
                    font-weight:50;
                    color:rgba(13,13,12,1);
                    line-height:.39rem;
                }
                .nearbyUser{
                    padding-left:5.8%;
                    padding-top:10.64%;
                    height:.87rem;
                    .uerImg{
                        float:left;
                        margin-right:.1rem;
                    }
                    .userName{
                        float:left;
                        font-size:.2rem;
                        font-family:PingFang-SC-Regular;
                        font-weight:400;
                        color:rgba(43,43,41,1);
                    }
                    .userPraise{
                        float:right;
                        margin-right:.32rem;
                        display: flex;
                        justify-content: center;
                        .praiseNum{
                            margin-left:.1rem;
                            font-size:.20rem;
                            font-family:PingFang-SC-Regular;
                            font-weight:400;
                            color:rgba(43,43,41,1);
                        }
                    }
                }
            }
        }
    }
    
}
    

    
</style>
