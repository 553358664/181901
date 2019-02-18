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
//console.log(data)
let userList = data.data
const userinfo = (config)=>{
    return userList
}
let registerList = data.data;
const register = (config)=>{
	//console.log(config)
	var username = config.body.split("=")[1];
	//console.log(username);
	//console.log(data.data[1])
	for(var i = 0;i < data.data.length;i ++){
		if(data.data[i].username == username){
			//console.log(i)
			return i;
		}
	} 
}
export default {
    userinfo,
    register
}