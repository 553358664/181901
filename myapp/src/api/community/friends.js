// import {pathParams} from "../../utils/database";
const Mock  = require("mockjs");
let data = Mock.mock({
    "article|10":[
        {
            "artickeId|+1":1,
            "articleCover":"@Image('360x480','#c33', '#ffffff','花友圈')",
            "userPhoto":"@Image('31x27','#c33', '#ffffff','花友圈')",
            "articleTitle":"@csentence(10,15)",
            "username":"@csentence(2,10)",
            "praise|0-100":10,
            "show":false
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