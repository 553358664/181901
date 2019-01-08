<template>
    <div class="nearby wrapper" ref="homeWrapper">
        <ul class="content nearbyUl">
            <li class="nearbyLi">
                <div class="nearbyImg">
                   <img src="../../../../assets/community/qiu/img_1.png" alt=""> 
                </div>   
                <div class="nearbyBox">
                    <p class="nearbyP">                      
                        薰衣草其实是薄荷家族的一员，以“招蜂引
                    </p>
                    <div class="nearbyUser">
                        <div class="uerImg">
                            <img src="../../../../assets\community\qiu\content_icon-like2.png" alt="">
                        </div> 
                        <p class="userName">啊哈</p>  
                        <p class="userPraise">
                            <img src="../../../../assets\community\qiu\content_icon-like2.png" alt="">
                            <span class="praiseNum">9999</span>
                        </p>                     
                    </div>
                </div>            
            </li>
             <li class="nearbyLi">
                <div class="nearbyImg">
                   <img src="../../../../assets/community/qiu/img_1.png" alt=""> 
                </div>   
                <div class="nearbyBox">
                    <p class="nearbyP">                      
                        薰衣草其实是薄荷家族的一员，以“招蜂引
                    </p>
                    <div class="nearbyUser">
                        <div class="uerImg">
                            <img src="../../../../assets\community\qiu\content_icon-like2.png" alt="">
                        </div> 
                        <p class="userName">啊哈</p>  
                        <p class="userPraise">
                            <img src="../../../../assets\community\qiu\content_icon-like2.png" alt="">
                            <span class="praiseNum">9999</span>
                        </p>                     
                    </div>
                </div>            
            </li>
             <li class="nearbyLi">
                <div class="nearbyImg">
                   <img src="../../../../assets/community/qiu/img_1.png" alt=""> 
                </div>   
                <div class="nearbyBox">
                    <p class="nearbyP">                      
                        薰衣草其实是薄荷家族的一员，以“招蜂引
                    </p>
                    <div class="nearbyUser">
                        <div class="uerImg">
                            <img src="../../../../assets\community\qiu\content_icon-like2.png" alt="">
                        </div> 
                        <p class="userName">啊哈</p>  
                        <p class="userPraise">
                            <img src="../../../../assets\community\qiu\content_icon-like2.png" alt="">
                            <span class="praiseNum">9999</span>
                        </p>                     
                    </div>
                </div>            
            </li>
             <li class="nearbyLi">
                <div class="nearbyImg">
                   <img src="../../../../assets/community/qiu/img_1.png" alt=""> 
                </div>   
                <div class="nearbyBox">
                    <p class="nearbyP">                      
                        薰衣草其实是薄荷家族的一员，以“招蜂引
                    </p>
                    <div class="nearbyUser">
                        <div class="uerImg">
                            <img src="../../../../assets\community\qiu\content_icon-like2.png" alt="">
                        </div> 
                        <p class="userName">啊哈</p>  
                        <p class="userPraise">
                            <img src="../../../../assets\community\qiu\content_icon-like2.png" alt="">
                            <span class="praiseNum">9999</span>
                        </p>                     
                    </div>
                </div>            
            </li>

            
            <li class="nearbyLi">
                <div class="nearbyImg">
                   <img src="../../../../assets/community/qiu/img_1.png" alt=""> 
                </div>   
                <div class="nearbyBox">
                    <p class="nearbyP">                      
                        薰衣草其实是薄荷家族的一员，以“招蜂引
                    </p>
                    <div class="nearbyUser">
                        <div class="uerImg">
                            <img src="../../../../assets\community\qiu\content_icon-like2.png" alt="">
                        </div> 
                        <p class="userName">啊哈</p>  
                        <p class="userPraise">
                            <img src="../../../../assets\community\qiu\content_icon-like2.png" alt="">
                            <span class="praiseNum">9999</span>
                        </p>                     
                    </div>
                </div>            
            </li>
             <li class="nearbyLi">
                <div class="nearbyImg">
                   <img src="../../../../assets/community/qiu/img_1.png" alt=""> 
                </div>   
                <div class="nearbyBox">
                    <p class="nearbyP">                      
                        薰衣草其实是薄荷家族的一员，以“招蜂引
                    </p>
                    <div class="nearbyUser">
                        <div class="uerImg">
                            <img src="../../../../assets\community\qiu\content_icon-like2.png" alt="">
                        </div> 
                        <p class="userName">啊哈</p>  
                        <p class="userPraise">
                            <img src="../../../../assets\community\qiu\content_icon-like2.png" alt="">
                            <span class="praiseNum">9999</span>
                        </p>                     
                    </div>
                </div>            
            </li>
        </ul>
    </div>
</template>


<script>
import BScroll from "better-scroll";
export default {
  methods:{

  }, 
  mounted(){
      console.log(this)
    this.scroll = new BScroll(this.$refs.homeWrapper,{
        //只有设置成true pullingUp才能使用
        pullUpLoad:true
    });
  }
}
</script>
<style scoped lang="scss">
.nearby{
    background:#EEEEEE;
    width:100%;
    height:10.5rem;
    overflow: hidden;
   .nearbyUl{
        overflow: hidden;
        zoom:1;   
        .nearbyLi{
            margin:.1rem 0 0 .1rem;
            width:3.6rem;
            float:left;
        .nearbyBox{
                width:3.6rem;
                height:1.74rem;
                background:rgba(252,252,250,1);
                border-radius:0px 0px 10px 10px;
                .nearbyP{
                    margin-left:.32rem;
                    width:3.1rem;
                    height:.75rem;
                    font-size:.26rem;
                    font-family:PingFang-SC-Medium;
                    font-weight:50;
                    color:rgba(13,13,12,1);
                    line-height:.39rem;
                }
                .nearbyUser{
                    padding-left:.32rem;
                    padding-top:.22rem;
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
