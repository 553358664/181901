const qs = require("querystring");

const pathParams = (url)=>{
    return qs.parse(url);
}
const Mock  = require("mockjs");
let data = Mock.mock({
    "data|5":[
        {
            "shopId|+1": 1,
            
            "username": /^1(5|3|7|8)[0-9]{9}$/,
            "vcode":  /\w{6}/,
            "password":/\d{6,12}/,
            
            
        }
    ]
})
console.log(data)
let userList = data.data
const userinfo = (config)=>{
    return userList
}
let registerList = data.data;
const register = (config)=>{
	
	var username = config.body.split("=")[1];
	
	
	//console.log(data.data[1])
	for(var i = 0;i < registerList.length;i ++){
		if(registerList[i].username == username){
			return registerList[i]
			
		}
	} 
}
var arr=data.data
const userAdd = (config)=>{
	
	var username = config.body.substr(5,11);
	var len = config.body.length;
	var password = config.body.substr(16,len-16);
	var userinfo ={
		username:username,
		password:password
	}
	arr= arr.push(userinfo);
	return true
}
console.log(arr)
const loginInfo = (config)=>{
	var username = config.body.substr(5,11);
	var len = config.body.length;
	var password = config.body.substr(16,len-16);
	console.log(username,password,arr);
	for(var i = 0;i < arr.data.length;i ++){
		if(arr.data[i].username == username){
			if(arr.data[i].password==password){
				return 22
			}else{
				return 33;
			}
			
		}else{
			return 44;
		}
	} 
}
export default {
    userinfo,
    register,
    userAdd,
    loginInfo
}