export default {
    handleUsername(state){
    	var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
    		if(reg.test(state.username)){
    			state.userFlag = true;
    			
    		}else{
    			state.userFlag = false;
    			state.tShow = true;
    			state.tishi = "手机号不符合规范";
    			setTimeout(()=>{
    				state.tShow = false;
    			},2000)
    			
    		}
    		
    },
    
//	handlePasswordlogin(state, e) { 
//      console.log(e.target.value);
//      ;
//  },
//  handleUsernamelogin(state, e) { 
//      console.log(e.target.value);
//      state.password = e.target.value;
//  }

}