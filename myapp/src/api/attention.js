const Mock  = require("mockjs");
let data = Mock.mock({
    "data|5":[
        {   
            "user|+1":1,
            "userName":'@csentence(2,6)',
            "content":'@csentence(30,60)',
            "Fabulous":"@natural(1,9999)",
            "Collection":"@natural(1,9999)",
            "Forward":"@natural(1,9999)",
            "comment|3":[{
                "name":"@cname",
                "cctent":'@csentence(4,30)'
            }],
            "userImg":"@Image('68x68','#c33', '#ffffff','头像')",
            "coverImg":"@Image('750x856','#c33', '#ffffff','封面')",
            "createTime1":'@date("MM-dd")',
            "createTime2":'@date("HH:mm")'
        }
    ]
})
let attention = data.data;
const myList = (config)=>{
    return attention
}
export default {
    attention
}