<template>
    <div class= "fs">
        <!-- 功能区 -->
        <div class="header">
             <div class="top">
                <ul>
                    <li v-for="(item,index) in navs" :key="index">
                        <router-link :to="{name:item.name}">
                            {{item.title}}
                        </router-link>
                    </li>
                </ul>          
            </div>
            <div class="search">
                <router-link :to="{name:search}">
                    <input type="text" class="search-input" value="大家都在看“烈焰柔情一品红”">
                </router-link>                
            </div>
        </div>      
        <router-view/>
    </div>
</template>

<script>
export default {
    data(){
        return{
            navs:[
                {
                   name:"attention",
                   title:"关注" 
                },
                {
                   name:"friends",
                   title:"花友圈" 
                },
                {
                   name:"nearby",
                   title:"附近" 
                }
            ],
            search:'search'
        }
    }
}
</script>

<style scoped lang="scss">
$color:#FCFCFA;
    .fs{
        width:100%;
        height:1.48rem;
        margin-top:.3rem;
        .header{
            height:100%;
            box-shadow:1px 2px 4px 0px rgba(0, 0, 0, 0.06);
            .top{
            height:.48rem;
            width:3.3rem;
            margin:0 auto;
            ul{
                height:.48rem;
                display: flex;
                justify-content: space-between;
                li{
                    font-size:.32rem;
                    a{
                        display:block;
                        height:.48rem
                    }
                    .router-link-active{
                        color: #0A0A0A;
                        font-weight: bold;
                        border-bottom:.05rem solid #F44C36;
                    }
                }
            }
        }
        .search{
                width:7.04rem;
                height:.76rem;
                 margin:.2rem auto;
                 padding-bottom:.12rem;
                .search-input{
                    width:100%;
                    height:.64rem;
                    background:rgba(238,238,238,1);
                    border-radius:.32rem;  
                    border:0; 
                    padding-left:.3rem;   
                    text-align: center;
                    font-size:.26rem;
                    font-family:PingFang-SC-Regular;
                    font-weight:400;
                    color:rgba(10,10,10,1);
                    opacity:0.8;
                }
            }
        }        
    };


</style>
