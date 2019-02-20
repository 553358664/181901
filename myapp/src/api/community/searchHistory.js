const Mock  = require("mockjs");
let data = Mock.mock({
    "history|10":[
        {
            "RecordId|+1":1,
            "Record":"@csentence(2,8)",
        }
    ]
})

let searchHistory = data.history;

const history =(config)=>{
    return searchHistory
}

export default {
    history
}