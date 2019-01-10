<template>
    <div class="loginForm">
       <!-- 登录 验证 -->
        <div class="loginContent">
            <div><label><span><img src="../../../../assets/welogreg/register/icon_sj@2x.png"></span></label><input type="text" placeholder="账号/手机号" id="username" @blur="loginUsername()"></div>
            <div><label><span><img src="../../../../assets/welogreg/register/icon_mm@2x.png"></span></label><input type="password" placeholder="密码" id="password" @blur="loginPassword"><router-link to="/forgetPwd">忘记密码？</router-link></div>
            <section class="dibu">
            	<span class="tishi" v-show="flag">
	            	{{tishi}}
	            </span>
	            <input type="button" id="sub" name="" value="注册" @click="checkForm()"/>
            </section>
            
        </div>
           
       
    </div>
</template>

<script >
export default {
   data(){
        return {
           username:"",
           password1:"",
           password2:"",
           userFlag:false,
           pwdFlag:false,
           pwdFlag1:false,
           tishi:"",
           flag:false
        }
    },
    methods:{
    	checkForm(){
    		if(this.userFlag && this.pwdFlag && this.pwdFlag2){
    			this.register();
    			return true;
    		}else{
    			return false;
    		}
//  		e.preventDefault();
    	},
    	loginUsername(){
    		
    		var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
    		if(reg.test(this.username)){
    			this.userFlag = true;
    			alert("qqq")
    		}else{
    			this.userFlag = false;
    			this.flag = true;
    			this.tishi = "手机号不符合规范";
    		}
    	},
    	loginPassword(){
    		var reg = /^\w{6,12}$/;
    		if(reg.test(this.password1)){
    			this.pwdFlag = true;
    		}else{
    			this.pwdFlag1 = false;
    			this.flag = true;
    			this.tishi = "密码格式为6-12位数字字母下划线";
    		}
    	},
}
    }
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
            a{
                width: 1.9rem;
                height: 100%;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                font-size: .3rem;
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