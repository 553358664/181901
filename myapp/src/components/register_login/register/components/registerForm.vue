<template>
    <div class="registerForm" >
        <!-- 注册验证-->
        <div class="formContent">
            <div><label><span><img src="../../../../assets/welogreg/register/icon_sj@2x.png"></span></label><input type="text" placeholder="请输入手机号" id="username" v-model="username.username" @blur="handleUsername()"></div>
            <div><section><label><span><img src="../../../../assets/welogreg/register/icon_yam@2x.png"></span></label><input type="text" placeholder="填写验证码" id="ecode"></section><button>获取验证码</button></div>
            <div><label><span><img src="../../../../assets/welogreg/register/icon_mm@2x.png"></span></label><input type="password" placeholder="密码" id="password" v-model="password1.password1" @blur="handlePassword1()"></div>
            <div><label><span><img src="../../../../assets/welogreg/register/icon_qrmm@2x.png"></span></label><input type="password" placeholder="确认密码" id="password1" v-model="password2.password2" @blur="handlePassword2()"></div>
            <section class="dibu">
            	<span class="tishi" v-show="tShow.tShow">
	            	{{tishi}}
	            </span>
	            <input type="button" id="sub" name="" value="注册" @click="checkForm();addUser(this.username,this.password)"/>
            </section>
            
        </div>
    </div>
</template>
<script >
import Vuex from "vuex"
export default {
    data(){
        return {
           
        }
    },
    computed:{
    	...Vuex.mapState({
    		username:state=>state.register_login,
    		password1:state=>state.register_login,
    		password2:state=>state.register_login,
    		tishi:state=>state.register_login,
    		tShow:state=>state.register_login,
    		userFlag:state=>state.register_login,
    		pwdFlag:state=>state.register_login,
    		pwdFlag1:state=>state.register_login
    	})
    },
    created(){
 		this.$store.dispatch("register_login/addUser")
    },
    methods:{
    	...Vuex.mapMutations({
    		handleUsername:"register_login/handleUsername",
    		handlePassword1:"register_login/handlePassword1",
    		addUser:"register_login/addUser"
    	}),
    	
//    	...Vuex.mapActions({
//          handleDel:"register_login/handleDel"
//      })
    	checkForm(){
    		if(this.userFlag && this.pwdFlag && this.pwdFlag2){
				return true;
    			
    		}else{
    			return false;
    		}
    	},
    	handlePassword2(){
    		if(this.password1 == this.password2){
    			this.pwdFlag2 = true;
    		}else{
    			this.pwdFlag2 = false;
    			this.flag = true;
    			this.tishi = "两次密码输入不一致";
    		}
    	},
    	
    }
}
</script>
<style lang="scss" scoped>
.registerForm{
    
    height: 7.82rem;
    width: 100%;
    margin-bottom: .49rem;
    
    .formContent{
        /*padding: 0 0.9rem 0 0.9rem;*/
        width: 100%;
        height: 100%;
       	display:flex;
       	flex-direction:cloumn;
       	justify-content: center;
       	align-items:center;
       	flex-wrap:wrap;
        div{
            height: 1.5rem;
            width: 75.86%;
            border-bottom: 2px solid #fff;
            padding: .72rem 0 0.08rem 0;
            display: flex;
            justify-content: center;
            label{
                width:.56rem;
                height:.67rem;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                border-right: 1px solid #fff;
                margin-right: .15rem;
                padding-left: .03rem;
                span{
                    width: .44rem;
                    height: .5rem;
                    img{
                        width: 100%;
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
                color: #fffefc;
                -webkit-tap-highlight-color:rgba(255,0,0,0);
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
        	display: flex;
        	justify-content: space-between;
            border: 0;
            section{
                width: 47.8%;
                height: 100%;
                display: flex;
                justify-content: flex-start;
                border-bottom: 2px solid #fff;
                position: relative;
                label{
                    width:.56rem;
                    height:.67rem;
                    display: flex;
                    justify-items: flex-start;
                    align-items: center;
                    border-right: 1px solid #fff;
                    
                    span{
                        width: .44rem;
                        height: .5rem;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    
                
                }
                input{
                    position: absolute;
                    left: .69rem;
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
                    width: 48.6%;
                    height: .73rem;
                    line-height: .73rem;
                    text-align: center;
                }
        }
        div:nth-child(4){
        	margin-bottom:.2rem ;
        }
        .dibu{
        	width: 75.86%;
        	height: 1.6rem;
        	position: relative;
        	.tishi{
	       		width: 100%;
	       		height: .6rem;
	       		margin-bottom: .2rem;
	       		font-size: .3rem;
	       		color: #000;
	       		display: flex;
	       		justify-content: center;
	       		align-items: center;
	       		color: #ff7268;
	       	}
	        #sub{
	        	position: absolute;
	        	left: 0;
	        	bottom: 0;
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
    
}
</style>