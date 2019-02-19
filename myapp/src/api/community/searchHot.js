const Mock  = require("mockjs");
let data = Mock.mock({
    "hot|10":[
        {
            "RecordId|+1":1,
            "Record":"@csentence(2,8)",
        }
    ]
})

let searchHot = data.hot;

const hot =(config)=>{
    return searchHot
}

export default {
    hot
}