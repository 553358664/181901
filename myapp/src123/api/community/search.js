const Mock  = require("mockjs");
let data = Mock.mock({
    "search|10":[
        {
            "articleId|+1":1,
            "articleCover":"@Image('360x480','#c33', '#ffffff','花友圈')",
            "userPhoto":"@Image('31x27','#c33', '#ffffff','花友圈')",
            "articleContent":"@csentence(15,150)",
            "articleTitle":"@csentence(1,15)",
            "userName":"@csentence(2,8)",
            "praiseCount|0-100":10,
            "praiseShow|1":false
        }
    ]
})

let searchData = data.search;

const search =(config)=>{
    return searchData
}

export default {
    search
}