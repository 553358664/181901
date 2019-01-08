<template>
    <div class="loginForm">
       <!-- 登录 -->
        <div class="loginContent">
            <div><label><span><img src="../../../../assets/welogreg/register/icon_sj@2x.png"></span></label><input type="text" placeholder="账号/手机号" id="username"></div>
            <div><label><span><img src="../../../../assets/welogreg/register/icon_mm@2x.png"></span></label><input type="password" placeholder="密码" id="password"><p>忘记密码</p></div>
            <button>登录</button>
        </div>
           
       
    </div>
</template>

<script >
export default {
   
}
</script>

<style lang="scss" scoped >
 .loginForm{
     height: 5.3rem;
     width: 100%;
     margin-bottom: .8rem;
     .loginContent{
         padding: 0 0.9rem;
         width: 100%;
         height: 100%;
         div{
             height: 1.5rem;
             width: 100%;
             border-bottom: 2px solid #fff;
             padding: .74rem 0 0.07rem 0;
             display: flex;
             justify-content: center;
             label{
                width:.56rem;
                height:.67rem;
                display: flex;
                justify-items: flex-start;
                align-items: center;
                border-right: 1px solid #fff;
                margin-right: .15rem;
                span{
                    width: .5rem;
                    height: .44rem;
                    img{
                        width: 90%;
                        height: 100%;
                    }
                }
            }
            input{
                outline: none;
                border: 0;
                height: 100%;
                flex: 1;
                width: 5rem;
                background: transparent;
                font-size: .3rem;
                line-height: .67rem;
            }
         }
        div:nth-child(1){
            span{
                width: .37rem;
                img{
                    width: 100%;
                }
            }
        }
        div:nth-child(2){
            input{
                width: .31rem;
            }
            p{
                width: 1.9rem;
                height: 100%;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                font-size: .3rem;
            }
            margin-bottom: 1.2rem;
        }
        button{
            width:100%;
            height: .8rem;
            line-height: .8rem;
            display: flex;
            outline: none;
            border: 0;
            background: #ff7268;
            font-size: .3rem;
            justify-content: center;
            border-radius: 5px;
            color: #fff;
        }
     }
 }
</style>