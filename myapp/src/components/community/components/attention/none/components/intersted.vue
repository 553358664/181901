<template>
    <div class="intersted">
        <div class="interp1">你可能感兴趣的用户</div>
        <ul>
            <li class="interlist">
                <div class="cancel">
                    <img src="../../../../../../assets/community/yq/content_icon_del@2x.png"/>
                </div>
                <div class="userimg">
                    <img src="../../../../../../assets/community/yq/img_3@2x.png"/>
                </div>
                <div class="username">
                    <span>喜欢肉夹馍</span>
                </div>
                <div class="usersign">
                    <span>大姐姐你喜欢吃青椒吗</span>
                </div>
                <div class="addatten">关注</div>
            </li>
            <li class="interlist">
                
            </li>
            <li class="interlist">
                
            </li>
        </ul>
    </div>
</template>
                                                   
<script>
import Vuex from "vuex";
export default {
    
}
</script>
<style scoped lang="scss">
    .intersted{
        .interp1{
            height: .25rem;
            font-size:.26rem;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            color:rgba(13,13,12,1);
            margin-left: .3rem;
            margin-top: .4rem;
        }
        >ul{
            width: max-content;
            margin-top: .3rem;
            margin-left: .3rem;
           .interlist{
                float: left;
                width:2.7rem;
                height:4.22rem;
                background:rgba(252,252,250,1);
                border-radius:.1rem;
                margin-right: .15rem;
                .cancel{
                    margin-left: 2.32rem;
                    margin-top: .18rem;
                    width: .2rem;
                    height: .2rem;
                    img{
                        height: 100%;
                        width: 100%;
                    }
                }
                .userimg{
                    margin: 0 auto;
                    margin-top: .1rem;
                    width: 1.66rem;
                    height: 1.66rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .username{
                    margin: 0 auto;
                    margin-top:.23rem;
                    text-align: center;
                    height:.27rem;
                    font-size:.28rem;
                    font-family:PingFang-SC-Medium;
                    font-weight:500;
                    color:rgba(13,13,12,1);
                }
                .usersign{
                    margin: 0 auto;
                    margin-top:.23rem;
                    text-align: center;
                    height:.21rem;
                    font-size:.22rem;
                    font-family:PingFang-SC-Regular;
                    font-weight:400;
                    color:rgba(43,43,41,1);
                }
                .addatten{
                    margin: 0 auto;
                    margin-top:.35rem;
                    width:2.08rem;
                    height:.54rem;
                    background:rgba(244,76,54,1);
                    border-radius:.27rem;
                    text-align: center;
                    line-height:.54rem;
                    font-size:28px;
                    font-family:PingFang-SC-Medium;
                    font-weight:500;
                    color:rgba(255,255,255,1);
                }
            } 
        }
        
    }
</style>