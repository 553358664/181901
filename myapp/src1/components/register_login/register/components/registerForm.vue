<template>
    <div class="registerForm" >
        <!-- 注册验证-->
        <div class="formContent">
            <div><label><span><img src="../../../../assets/welogreg/register/icon_sj@2x.png"></span></label><input type="text" placeholder="请输入手机号" id="username" v-model="username.username" @blur="handleUsername()"></div>
            <div><section><label><span><img src="../../../../assets/welogreg/register/icon_yam@2x.png"></span></label><input type="text" placeholder="填写验证码" id="ecode"></section>    
            	<span v-show="sendAuthCode" class="auth_text auth_text_blue"  @click="getAuthCode">获取验证码</span>
    <span v-show="!sendAuthCode" class="auth_text"> <span class="auth_text_blue">{{auth_time}} </span> 秒之后重新获取</span>
</div>
            <div><label><span><img src="../../../../assets/welogreg/register/icon_mm@2x.png"></span></label><input type="password" placeholder="密码" id="password" v-model="password1.password1" @blur="handlePassword1()"></div>
            <div><label><span><img src="../../../../assets/welogreg/register/icon_qrmm@2x.png"></span></label><input type="password" placeholder="确认密码" id="password1" v-model="password2.password2" @blur="handlePassword2()"></div>
            <section class="dibu">
            	<span class="tishi" v-show="tShow.tShow">
	            	{{tishi.tishi}}
	            </span>
	            <input type="button" id="sub" name="" value="注册" @click="checkForm();"/>
            </section>
            
        </div>
    </div>
</template>
<script >
import Vuex from "vuex"
import axios from "axios"
export default {
    data(){
        return {
           autoCode:"获取验证码",
           sendAuthCode:true,/*布尔值，通过v-show控制显示‘获取按钮’还是‘倒计时’ */
        	auth_time: 0, /*倒计时 计数器*/
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
    		pwdFlag1:state=>state.register_login,
    		
    	})
    },
    created(){
	
    },
    methods:{
    	...Vuex.mapMutations({
    		handleUsername:"register_login/handleUsername",
    			handlePassword1:"register_login/handlePassword1",

    	}),
    	...Vuex.mapActions({
//  		addUser:"register_login/addUser",
    		
    	}),
    	getAuthCode() {
    		axios({
	            method:"get",
	            				url:"http://localhost:3000/userlist?username="+this.username.username,
	            
	        }).then((data)=>{
	        	if(data.data.length==0){
	        		this.sendAuthCode = false;
		            this.auth_time = 30;
		            var auth_timetimer =  setInterval(()=>{
		                this.auth_time--;
		                if(this.auth_time<=0){
		                    this.sendAuthCode = true;
		                    clearInterval(auth_timetimer);
		                }
		            }, 1000);
	        	}else{
	        		alert("用户名已存在")
	        	}
	        })
            
        },

//  	checkUser(username){
//  		axios({
//	            method:"get",
//	            url:"http://localhost:3000/userlist?username="+username,
//	            
//	        })
//	        .then((data)=>{
//	        	
//	        	console.log(data.data.length)
//	           if(data.data.length==0){
//	           		return true;
//	           }else{
//	           		return false;
//	           }
//	        })
//  	},
//    	addUser(user){
//	        axios({
//	            method:"post",
//	            url:"http://localhost:3000/userlist",
//	            data:user
//	        })
//	        .then((data)=>{
//	            if(data.status==201){
//	            	return true;
//	            }else{
//	            	return false;
//	            }
//	        })
//	   },
    	checkForm(){
    		if(this.userFlag.userFlag && this.pwdFlag.pwdFlag && this.pwdFlag1.pwdFlag1){
//  		axios({
//	            method:"get",
//	            				url:"http://localhost:3000/userlist?username="+this.username.username,
//	            
//	        })
//	        .then((data)=>{
//	        	
//	        	
//	           if(data.data.length==0){
	           		axios({
			            method:"post",
			            url:"http://localhost:3000/userlist",
			            data:{
			            	username:this.username.username,
			            	password:this.password1.password1
			            }
	        		})
			        .then((data)=>{
			            if(data.status==201){
			            	alert("注册成功");
			            	this.$router.replace("/login")
			            }else{
			            	alert("注册失败")
			            }
			        })
//	           	}else{
//	           		alert("用户名已存在")
//	           	}
//	          })
	        }
//  			console.log(this.username.username)
//  			if(this.checkUser(this.username.username)){
//  				alert(333)
    					/*if(this.addUser({username:this.username.username,password:this.password1.password1})){
    					alert("注册成功去登录");
    					this.$router.replace("/login")
    				}else{
						alert("注册失败")
    				}*/
//  			}else{
//  				alert("用户名已存在")
//  			}
////  			
//				return true;
//  			
//  		}else{
//  			return false;
//  		}
    	},
    	handlePassword2(){
    		if(this.password1 == this.password2){
    			this.pwdFlag1.pwdFlag1 = true;
    		}else{
    			this.pwdFlag1.pwdFlag1 = false;
    			this.tShow.tShow = true;
    			this.tishi.tishi = "两次密码输入不一致";
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