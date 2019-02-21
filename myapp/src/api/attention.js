const Mock  = require("mockjs");
let data = Mock.mock({
    "data|5":[
        {   
            "user|+1":1,
            "userName":'@csentence(2,6)',
            "articleContent":'@csentence(30,60)',
            "praiseCount":"@natural(1,9999)",
            "collectCount":"@natural(1,9999)",
            "commentCount":"@natural(1,9999)",
<<<<<<< HEAD
            "comment|2":[{
                "userName":"@cname",
                "articleContent":'@csentence(4,30)'
            }],
            "userPhoto":"@Image('68x68','#c33', '#ffffff','头像')",
=======
            "comment|3":[{
                "userName":"@cname",
                "articleContent":'@csentence(4,30)'
            }],
            "usePhoto":"@Image('68x68','#c33', '#ffffff','头像')",
>>>>>>> qiu
            "articleCover":"@Image('750x856','#c33', '#ffffff','封面')",
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