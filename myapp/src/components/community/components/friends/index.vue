<template>
    <div class="friends wrapper" ref="homeWrapper" >
        <router-link :to="{name:publish}">
            <img src="../../../../assets/community/qiu/hover.png" alt="" class="friendsPoint">   
        </router-link>
        <ul class="content friendsUl">
            <li class="friendsLi" v-for="(item,index) in article" :key='index'>
                <div class="friendsImg">
                   <img src="../../../../assets/community/qiu/img_1.png" alt=""> 
                </div>   
                <div class="friendsBox">
                    <p class="friendsP">                      
                        {{item.centent}}
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
        this.handleArticle()
    //    this.hanle()
    },
    computed:{
        ...Vuex.mapState({ 
          article:state=>state.community.articleList
        })
    },
    data(){
        return{
            // positionX:0,
            // positionY:0,
            publish:"publish"
        }
    },
    methods:{
        ...Vuex.mapActions({
          handleArticle:"community/handleArticle"
      }),
      hanle(){
          console.log(this)
      },
    //   handleMove(e){
    //     let op = e.target;    //获取目标元素
    //     //算出鼠标相对元素的位置
    //     let disX = e.clientX - op.offsetLeft;
    //     let disY = e.clientY - op.offsetTop;
    //     console.log(disX,disY)
    //     this.$refs.homeWrapper.onmousemove = (e)=>{    //鼠标按下并移动的事件
    //     //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
    //     let left = e.clientX - disX;  
    //     let top = e.clientY - disY;

    //     //绑定元素位置到positionX和positionY上面
    //     this.positionX = top;
    //     this.positionY = left;

    //     //移动当前元素
    //     op.style.left = left + 'px';
    //     op.style.top = top + 'px';
    //     this.$refs.homeWrapper.onmouseup = (e) => {
    //         this.$refs.homeWrapper.onmousemove = null;
    //         this.$refs.homeWrapper.onmouseup = null;
    //     };
    //   }
    // }
  }, 
  mounted(){
    this.scroll = new BScroll(this.$refs.homeWrapper,{
        //只有设置成true pullingUp才能使用
        click:true,
        pullUpLoad:true
    });
  }
}
</script>
<style scoped lang="scss">
.friends{
    background:#EEEEEE;
    width:100%;
    height:100%;
    overflow:hidden;
    position:relative;
    .friendsPoint{
        position: absolute;   /*定位*/
        top:0;
        left:0;
    }
   .friendsUl{
        overflow: hidden;
        zoom:1;  
        padding-bottom:3.2rem; 
        .friendsLi{
            margin:1% 0 0 1%;
            width:48%;
            float:left;
            .friendsImg{
                width:100%;
                img{
                    width:100%;
                }
            }
        .friendsBox{
                width:100%;
                height:1.74rem;
                background:rgba(252,252,250,1);
                border-radius:0px 0px 10px 10px;
                .friendsP{
                    margin-left:5.8%;
                    padding-top:2.64%;
                    width:78.9%;
                    height:.75rem;
                    font-size:.26rem;
                    font-family:PingFang-SC-Medium;
                    font-weight:50;
                    color:rgba(13,13,12,1);
                    line-height:.39rem;
                }
                .friendsUser{
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
