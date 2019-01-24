<template>
    <div class="loginForm">
       <!-- 登录 验证 -->
        <div class="loginContent">
            <div><label><span><img src="../../../../assets/welogreg/register/icon_sj@2x.png"></span></label><input type="text" placeholder="账号/手机号" id="username" @blur="handleUsername"  v-model="username.username" autocomplete="off"></div>
            <div><label><span><img src="../../../../assets/welogreg/register/icon_mm@2x.png"></span></label><input type="password" placeholder="密码" id="password" @blur="handlePassword1" v-model="password1" ><router-link to="/forgetPwd">忘记密码？</router-link></div>
            <section class="dibu">
            	<span class="tishi" v-show="tShow.tShow">
	            	{{tishi.tishi}}
	            </span>
	            <input type="button" id="sub" name="" value="登录" @click="checkForm()"/>
            </section>
            
        </div>
           
       
    </div>
</template>

<script >
import Vuex from "vuex"
import axios from "axios";
import Vue from 'vue';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css';
Vue.use(MintUI);
import { Toast } from 'mint-ui';
export default {
   data(){
        return {
           password1:"",
           pwdFlag:false
        }
    },
    computed:{
    	...Vuex.mapState({
    		username:state=>state.register_login,
    		
    		
    		tishi:state=>state.register_login,
    		tShow:state=>state.register_login,
    		userFlag:state=>state.register_login,
    		
    		
    		
    	})
    },
    methods:{
    	handlePassword1(){
		var reg = /^\w{6,12}$/;
		if(reg.test(this.password1)){
			this.pwdFlag = true;
			
		}else{
			this.pwdFlag = false;
			this.tShow.tShow = true;
			this.tishi.tishi = "密码格式为6-12位数字字母下划线";
//			Toast({
//		                message:"密码格式为6-12位数字字母下划线",
//		                duration: 1000
//		    })
		}
	},
    	checkForm(){
    		if(this.userFlag.userFlag && this.pwdFlag ){
    			var data={
    				username:this.username.username,
		            password:this.password
    			}
//  			axios.post("/register",{
//						username:this.username.username,
//		            	password:this.password
//					}).then((data)=>{
//						console.log(data,"mock")
//					});
    			axios({
	            method:"get",
	            url:"http://localhost:3000/userlist?username="+this.username.username,
	            
	        })
	        .then((data)=>{
	           console.log(data.data[0])
	           if(data.data[0].password==this.password1){
	           	localStorage.setItem("username",this.username.username)
	           	Toast({
	                message:"注册成功，去登录",
	                duration: 1000
	        	})
            	setTimeout(()=>{
            		this.$router.replace("/")
            	},3000)
			            		
	           }else{
	           		Toast({
	                message:"用户名密码不匹配，请检查",
	                duration: 1000
	        	})
				
	           }
	        })
	        
    	}else{
    		Toast({
	               message:"请检查信息是否填写正确",
	                duration: 1000
	        	})
    	}
    	
    	},
    	...Vuex.mapMutations({
    		handleUsername:"register_login/handleUsername",
//  		handlePassword1:"register_login/handlePassword1",
    		
//  		addUser:"register_login/addUser"
    	}),
    	}}

    	

    
</script>

<style lang="scss" scoped >
 .loginForm{
     height: 5.3rem;
     width: 100%;
     margin-bottom: .8rem;
     .loginContent{
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
             padding: .74rem 0 0.07rem 0;
             display: flex;
             justify-content: flex-end;
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
            a{
                width: 1.9rem;
                height: 100%;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                font-size: .34rem;
            }
            margin-bottom: .2rem;
        }
        /*div:nth-child(4){
        	margin-bottom:.2rem ;
        }*/
        .dibu{
        	width: 75.86%;
        	height: 1.6rem;
        	position: relative;
        	.tishi{
	       		width: 100%;
	       		height: .6rem;
	       		margin-bottom: .2rem;
	       		font-size: .34rem;
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