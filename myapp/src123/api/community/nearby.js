const Mock  = require("mockjs");
let data = Mock.mock({
    "article|10":[
        {
            "articleId|+1":1,
            "articleCover":"@Image('360x480','#c33', '#ffffff','花友圈')",
            "userPhoto":"@Image('31x27','#c33', '#ffffff','花友圈')",
            "articleTitle":"@csentence(1,15)",
            "userName":"@csentence(2,8)",
            "praiseCount|0-100":10,
            "praiseShow|1":false
        }
    ]
})

let nearbyArticke = data.article;

const article =(config)=>{
    return nearbyArticke
}

export default {
    article
}