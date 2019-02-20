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
// console.log(data)
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
	var brr = [];
	brr.push(userinfo);
	arr = arr.concat(brr);
	return true
}
// console.log(arr,"111")
const loginInfo = (config)=>{
	var username = config.body.substr(5,11);
	var len = config.body.length;
	var password = config.body.substr(16,len-16);
	console.log(username,password,arr);
	console.log(arr);
	var aaa="";
	for(var i = 0;i < arr.length;i ++){
		console.log("yhmyy11")
		console.log(arr[i].username);
		if(arr[i].username == username){
			console.log("yhmyy");
			console.log(arr[i].password);
			if(arr[i].password==password){
				console.log(arr[i].password);
				aaa = "22";
				return aaa;
			}else{
				aaa = "33"
			}
			
		}else{
			aaa = "44"
		}
	} 
	return aaa
}

// console.log(arr,"111")

const moCode = (config)=>{
	console.log(config);
	var ccc=""
	var username = config.body.split("=")[1]
	for(var i = 0;i < arr.length;i ++){
		if(arr[i].username == username){
			ccc = "22"
			return ccc;
			
		}else{
			ccc = "44";
		}
	} 
	return ccc
}
const moInfo = (config)=>{
	console.log(config);
	var ddd=""
	var username = config.body.substr(5,11);
	var len = config.body.length;
	var password = config.body.substr(16,len-16);
	console.log(username,password)
	for(var i = 0;i < arr.length;i ++){
		if(arr[i].username == username){
			arr[i].password = password;
			ddd = "22"
			return ddd
			
		}else{
			ddd= "33"
		}
	} 
	return ddd;

}
export default {
    userinfo,
    register,
    userAdd,
    loginInfo,
    moInfo,
    moCode
}