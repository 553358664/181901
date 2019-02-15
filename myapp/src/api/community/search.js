const Mock  = require("mockjs");
let data = Mock.mock({
    "data|20":[
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



let searchData = data.data;

const search =(config)=>{
    return searchData
}

export default {
    search
}