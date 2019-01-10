export default {
    handleUsername(state){
    	var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
    		if(reg.test(state.username)){
    			state.userFlag = true;
    			
    		}else{
    			state.userFlag = false;
    			state.tShow = true;
    			state.tishi = "手机号不符合规范";
    		}
    },
    handlePassword1(state){
		var reg = /^\w{6,12}$/;
		if(reg.test(state.password1)){
			state.pwdFlag = true;
		}else{
			state.pwdFlag = false;
			state.tShow = true;
			state.tishi = "密码格式为6-12位数字字母下划线";
		}
	},
//	addUser(state,params){
//	
//		if(status==200){
//			return true
//		}else{
//			return false;
//		}
//		
//	},
//	checkUser(state,params){
//
//		if(params.data.length==0){
//			return "22222";			
//		}else{
//			return "bbb";
//		}
//	}
//	addUser(state){
//  		
//	        axios({
//	            method:"post",
//	            url:"http://localhost:3000/userlist",
//	            data:{
//	            	"username":state.username,
//	            	"password":state.password1
//	            }
//	        })
//	        .then((data)=>{
//	           if(data.status==201){
//	           	alert("注册成功去登录");
//	           	this.$router.push("/login")
//	           }
//	        })
//	  
//  	},
}