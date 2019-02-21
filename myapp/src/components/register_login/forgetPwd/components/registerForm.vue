<template>
    <div class="registerForm" >
        <!-- 注册验证-->
        <div class="formContent">
            <div><label><span><img src="../../../../assets/welogreg/register/icon_sj@2x.png"></span></label><input type="text" placeholder="请输入手机号" id="username" v-model="username" @blur="handleUsername()" autocomplete="off"></div>
            <div><section><label><span><img src="../../../../assets/welogreg/register/icon_yam@2x.png"></span></label><input type="text" placeholder="填写验证码" id="ecode" v-model="tCode"></section>    
            	<span v-show="sendAuthCode" class="auth_text auth_text_blue"  @click="getAuthCode">获取验证码</span>
    <span v-show="!sendAuthCode" class="auth_text"> <span class="auth_text_blue">{{auth_time}} </span> 秒之后重新获取</span>
</div>
            <div><label><span><img src="../../../../assets/welogreg/register/icon_mm@2x.png"></span></label><input type="password" placeholder="密码" id="password" v-model="password1" @blur="handlePassword1()"></div>
            <div><label><span><img src="../../../../assets/welogreg/register/icon_qrmm@2x.png"></span></label><input type="password" placeholder="确认密码" id="password1" v-model="password2" @blur="handlePassword2()"></div>
            <section class="dibu">
            	<span class="tishi" v-show="tShow">
	            	{{tishi}}
	            </span>
	            <input type="button" id="sub" name="" value="修改" @click="checkForm();"/>
            </section>
            
        </div>
    </div>
</template>
<script >
	import Vue from 'vue';
import Vuex from "vuex"
import axios from "axios";
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css';
Vue.use(MintUI);
import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            autoCode:"获取验证码",
	        sendAuthCode:true,/*布尔值，通过v-show控制显示‘获取按钮’还是‘倒计时’ */
	        auth_time: 0, /*倒计时 计数器*/
	        vCode:"55",
	        tCode:"",
	        flagCode:false,
	        username:"",
		    password1:"",
		    password2:"",
		    tishi:"",
		    tShow:false,
		    userFlag:false,
			pwdFlag:false,
			pwdFlag1:false,
			flagShow:false,
			authCode1:"",
        }
    },
    computed:{
    	
    },
    created(){
	
    },
    methods:{

    	...Vuex.mapActions({

    		
    	}),
    	handleUsername(){
    		var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
    		if(reg.test(this.username)){
    			this.userFlag = true;
    			
    		}else{
    			this.userFlag = false;

				Toast({
		                message:"手机号不符合规范",
		                duration: 1000
		    	})
    			
			}
			axios.post("http://10.9.30.235:8080/checkname",{
						username:this.username,
		            	
					}).then((data)=>{
						console.log(data)
						if(!data.code){
							// Toast({
				            //     message:"用户名已存在",
				            //     duration: 1000
							// })
							var cc="222"
				           
						}else{
							Toast({
				                message:"此用户还未被注册~~`",
				                duration: 1000
				        	})
						}   
				         
					});
	    },
	    handlePassword1(){
			var reg = /^\w{6,12}$/;
			if(reg.test(this.password1)){
				this.pwdFlag = true;
			}else{
				this.pwdFlag = false;

				Toast({
		                message:"密码格式为6-12位数字字母下划线",
		                duration: 1000
		    })
			}
		},
		getAuthCode(){
			axios.post("http://10.9.30.235:8080/sms",{
						username:this.username,
		            	
					}).then((data)=>{
						console.log(data)
						
			        		this.sendAuthCode = false;
				            this.auth_time = 30;
				            var auth_timetimer =  setInterval(()=>{
				                this.auth_time--;
				                if(this.auth_time<=0){
				                    this.sendAuthCode = true;
				                    clearInterval(auth_timetimer);
				                }
				            }, 1000);
					})
		},
    	checkForm(){
    		
    		if(this.userFlag && this.pwdFlag && this.pwdFlag1){
    			axios.post("http://10.9.30.235:8080/user/updatePwd",{
						username:this.username,
						newPassword:this.password1
		            	
					}).then((data)=>{
						console.log(data);
						if(data.code =="1"){
							Toast({
				                message:"修改成功，去登录",
				                duration: 1000
				        	})
			            	setTimeout(()=>{
			            		this.$router.replace("/login")
			            	},3000)
						}
						
					})
    			

	        
	        }else{
	        	Toast({
	               message:"请检查信息是否填写正确",
	                duration: 1000
	        	})
	        }

    	},
    	handlePassword2(){
    		if(this.password1 == this.password2){
    			this.pwdFlag1 = true;
    		}else{
    			this.pwdFlag1 = false;
    			this.tShow = true;
    			this.tishi= "两次密码输入不一致";
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
                font-size: .34rem;
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
                    font-size: .34rem;
                    line-height: .67rem;
                }
            
                
               
            }
             .auth_text{
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