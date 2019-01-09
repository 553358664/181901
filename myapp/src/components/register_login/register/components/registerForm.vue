<template>
    <div class="registerForm">
        <!-- ע -->
        <div class="formContent">
            <div><label><span><img src="../../../../assets/welogreg/register/icon_sj@2x.png"></span></label><input type="text" placeholder="手机号" id="username"></div>
            <div><section><label><span><img src="../../../../assets/welogreg/register/icon_yam@2x.png"></span></label><input type="text" placeholder="验证码" id="ecode"></section><button>获取验证码</button></div>
            <div><label><span><img src="../../../../assets/welogreg/register/icon_mm@2x.png"></span></label><input type="password" placeholder="密码" id="password"></div>
            <div><label><span><img src="../../../../assets/welogreg/register/icon_qrmm@2x.png"></span></label><input type="password" placeholder="确认密码" id="password1"></div>
            <button>注册</button>
        </div>
    </div>
</template>
<script >
export default {
    data(){
        return {
           
        }
    },
    methods:{
    }
}
</script>
<style lang="scss" scoped>
.registerForm{
    
    height: 7.82rem;
    width: 100%;
    margin-bottom: .49rem;
    
    .formContent{
        padding: 0 0.9rem 0 0.9rem;
        width: 100%;
        height: 100%;
        div{
            height: 1.55rem;
            width: 100%;
            border-bottom: 2px solid #fff;
            padding: .72rem 0 0.08rem 0;
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
                color: #434343;
            }
        }
        div:nth-child(1){
            label{
                span{
                    width: .37rem;
                    height: .54rem;
                    img{
                        width: 100%;
                    }
                }
            }
        }
        div:nth-child(2){
            border: 0;
            section{
                width: 2.72rem;
                margin-right: .18rem;
                
                border-bottom: 2px solid #fff;
                position: relative;
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
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    width: 2rem;
                    height: 100%;
                    outline: none;
                    border: 0;
                    background: transparent;
                    font-size: .3rem;
                    line-height: .67rem;
                }
            
                
               
            }
             button{
                    outline: none;
                    border: 0;
                    background: #ff7268;
                    font-size: .3rem;
                    border-radius: 5px;
                    color: #fff;
                    width: 2.76rem;
                    height: .73rem;
                    line-height: .73rem;
                    text-align: center;
                }
        }
        div:nth-child(4){
            margin-bottom: 1rem;
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