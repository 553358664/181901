export default {
    handleUsername(state){
    	var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
    		if(reg.test(state.username)){
    			state.userFlag = true;
    			alert("qqq")
    		}else{
    			state.userFlag = false;
    			state.flag = true;
    			state.tishi = "手机号不符合规范";
    		}
    },
    handlePassword1(state){
		var reg = /^\w{6,12}$/;
		if(reg.test(state.password1)){
			state.pwdFlag = true;
		}else{
			state.pwdFlag1 = false;
			state.flag = true;
			state.tishi = "密码格式为6-12位数字字母下划线";
		}
	},
	addUser(state,params){
		console.log(params)
	}
}