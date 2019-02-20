const qs = require("querystring");

const pathParams = (url)=>{
    return qs.parse(url);
}
const Mock  = require("mockjs");
let data = Mock.mock({
    "data|5":[
        {   
            "articleId|+1":1,
            "userName":'@csentence(2, 8)',
            "userPhoto":"@Image('100x40','#c33', '#ffffff','头像')",
            "articleTitle":'@csentence(2, 8)',
            "articleContent":'@csentence(8, 140)',
            "articleCover":"@Image('100x40','#c33', '#ffffff','封面')",
            "comment|1-3":[
                {
                    "commenter":"@csentence(2,8)",
                    "commentcontent":"@csentence(1,20)"
                }
            ],
            "collent":'@natural(0,9999)',
            "praise":'@natural(0,9999)'
        }
    ]
})
let dataList = data.data;
const article = (config)=>{
    return dataList
}
export default {
    article
}