<template>
    <div class="friends wrapper" ref="homeWrapper">
        <ul class="content friendsUl">
            <li class="friendsLi">
                <div class="friendsImg">
                   <img src="../../../../assets/community/qiu/img_1.png" alt=""> 
                </div>   
                <div class="friendsBox">
                    <p class="friendsP">                      
                        薰衣草其实是薄荷家族的一员，以“招蜂引
                    </p>
                    <div class="friendsUser">
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
            <li class="friendsLi">
                <div class="friendsImg">
                   <img src="../../../../assets/community/qiu/img_1.png" alt=""> 
                </div>   
                <div class="friendsBox">
                    <p class="friendsP">                      
                        薰衣草其实是薄荷家族的一员，以“招蜂引
                    </p>
                    <div class="friendsUser">
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
            <li class="friendsLi">
                <div class="friendsImg">
                   <img src="../../../../assets/community/qiu/img_1.png" alt=""> 
                </div>   
                <div class="friendsBox">
                    <p class="friendsP">                      
                        薰衣草其实是薄荷家族的一员，以“招蜂引
                    </p>
                    <div class="friendsUser">
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
            <li class="friendsLi">
                <div class="friendsImg">
                   <img src="../../../../assets/community/qiu/img_1.png" alt=""> 
                </div>   
                <div class="friendsBox">
                    <p class="friendsP">                      
                        薰衣草其实是薄荷家族的一员，以“招蜂引
                    </p>
                    <div class="friendsUser">
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
import Vuex from "vuex"
import BScroll from "better-scroll";
export default {
    created(){
    //    this.handleArticle()
       this.hanle()
    },
    computed:{
        ...Vuex.mapState({ 
          article:state=>state.community.articleList
        })
    },

  methods:{
        ...Vuex.mapActions({
          handleArticle:"community/handleArticle"
      }),
      hanle(){
          console.log(this)
      }
  }, 
  mounted(){
    this.scroll = new BScroll(this.$refs.homeWrapper,{
        //只有设置成true pullingUp才能使用
        pullUpLoad:true,
         hasVerticalScroll: true
    });
  }
}
</script>
<style scoped lang="scss">
.friends{
    background:#EEEEEE;
    width:100%;
    min-height:13.4rem;
    overflow:hidden;
   .friendsUl{
        overflow: hidden;
        zoom:1;   
        .friendsLi{
            margin:1% 0 0 1%;
            width:48%;
            float:left;
            .friendsImg{
                width:100%;
                img{
                    width:100%
                }
            }
        .friendsBox{
                width:100%;
                height:1.74rem;
                background:rgba(252,252,250,1);
                border-radius:0px 0px 10px 10px;
                .friendsP{
                    margin-left:8.9%;
                    padding-top:1.264%;
                    width:88.6%;
                    height:.75rem;
                    font-size:.26rem;
                    font-family:PingFang-SC-Medium;
                    font-weight:50;
                    color:rgba(13,13,12,1);
                    line-height:.39rem;
                }
                .friendsUser{
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
