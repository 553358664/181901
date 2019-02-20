<template>
    <div class="wrapper" ref="fansWrapper">
         <ul class="content">
            <li v-for="(item,index) in myList">               
                 <div >
                    <router-link :to="{name:'details',params:{name:item.username,src:item.headPic}}" >
                        <span><img :src="item.headPic" /></span>                                            
                        <span ref="a">{{item.username}}</span>                     
                    </router-link>   
                    <p class="ok" @click="handleFollow($event)">关注</p> 
                 </div>
                <div class="line"></div>
            </li>
        </ul>
    </div>
</template>

<script>
import Vuex from "vuex";
import BScroll from "better-scroll";
export default {
     mounted(){
        this.scroll = new BScroll(this.$refs.fansWrapper,{
            scrollY:true,
            click:true
        })
    },
     created(){
        this.$store.dispatch("my/handleGet")     
    },
    computed:{
        ...Vuex.mapState({
            myList:state=>state.my.myList
        })
    },
    methods:{
         handleFollow(e){
            this.ok=!this.ok
            if(this.ok){
                 e.target.className="ok";
                 e.target.innerHTML="关注"
                
            }else{
                 e.target.className="cancle";
                 e.target.innerHTML="取消关注"
            }
        
       },
    }
    
    
}
</script>

<style lang="scss" scoped>
     .wrapper{
        width:100%;
        height:100%;
        background:#FCFCFA;
        font-size:.30rem;
        position:fixed;
        top:1.1rem;
    }
   .wrapper>.content{
        padding:0 .24rem;
        width: 100%;
        height: max-content;
        background:#FCFCFA;
    }
    .wrapper>.content>li{
        width:100%;
        height:1.4rem;
        line-height: 1.4rem;
    }
    .wrapper>.content>li>div{
        width:100%;
        height:1.4rem;
        display: flex;
        justify-content: space-between;
        align-items: center
    }
     .wrapper>.content>li>div>a>span:first-child{
        display:inline-block;
        margin-right:.2rem;
        vertical-align: middle;
    }

    .wrapper>.content>li>div>a>img,.wrapper>.content>li>div>a>span{
        display: inline-block;
    }  
    .wrapper>.content>li>div>.ok{
        display:inline-block;
        width:1.5rem;
        height:.48rem;
        line-height: .48rem;
        text-align: center;
        background:#F44C36;
        color: #EEEEEE;
        border-radius: .5rem;
    }
    .wrapper>.content>li>div>.cancle{
        display:inline-block;
        width:1.5rem;
        height:.48rem;
        line-height: .48rem;
        border:#F44C36 .01rem solid ;
        text-align: center;
        color:#F44C36;
        border-radius: .5rem;
    }
   .wrapper>.content>li>.line{
        height:.02rem;
        width:85%;
        float:right;
        background:#EEEEEE;
    }


</style>


