<template>
    <div class="wrapper" ref="collectionWrapper">
         <ul class="content">
            <li v-for="(item,index) in myList">               
                <router-link :to="{name:'myarticle'}">                                       
                        <span><img :src="item.cover"/></span>
                        <div class="article">
                            <p class="title">{{item.title}}</p>
                            <p class="writin">{{item.writin}}</p>
                        </div>                              
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import Vuex from "vuex";
import BScroll from "better-scroll";
export default {
    mounted(){
        this.scroll = new BScroll(this.$refs.collectionWrapper,{
            scrollY:true,
            click:true
        })
        // console.log(this.scroll);
    },
    created(){
        this.$store.dispatch("my/handleGet")     
    },
    computed:{
        ...Vuex.mapState({
            myList:state=>state.my.myList
        })
    },
     
}
</script>

<style lang="scss" scoped>
    .wrapper{
        width:100%;
        height:100%;
        font-size:.30rem;
        position:fixed;
        top:.9rem;
    }
    .wrapper>.content{
        width: 100%;
        height: 100%;
        height: max-content;
        padding:.1rem;
    }
    .wrapper>.content>li,.wrapper>.content>li>a{
        width:100%;
        height:2.86rem;
        margin-top: .2rem;
        background:#FCFCFA ;
        border-radius: .2rem;             
    }
    .wrapper>.content>li>a{
        padding:.24rem .24rem;
    }
    .wrapper>.content>li>a{
        display: flex;
    }
    .wrapper>.content>li>a>span{
        width:32%;
    }
    .wrapper>.content>li>a>span>img{
        width:2.2rem;
        height:2.2rem;
    }
    .wrapper>.content>li>a>.article{
        width:67%;
        padding-left:.3rem;
    }
    .wrapper>.content>li>a>.article>.title{
        font-size: .32rem;
        margin-bottom: .15rem;
        color:#1B1B1B 
    }
    .wrapper>.content>li>a>.article>.writin{
        font-size:.26rem;
        overflow: hidden;
        display:-webkit-box;
        -webkit-line-clamp:4;
        -webkit-box-orient: vertical;
    }

</style>


