const Mock  = require("mockjs");
let data = Mock.mock({
    "article|10":[
        {
            "artickeId|+1":1,
            "articleCover":"@Image('360x480','#c33', '#ffffff','花友圈')",
            "userPhoto":"@Image('31x27','#c33', '#ffffff','花友圈')",
            "articleTitle":"@csentence(1,15)",
            "authorname":"@csentence(2,8)",
            "praise|0-100":10,
            "show|1":Mock.Random.boolean(1,2,false)
        }
    ]
})

let friendArticke = data.article;

const article =(config)=>{
    return friendArticke
}

export default {
    article
}