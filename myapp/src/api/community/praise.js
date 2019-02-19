const Mock  = require("mockjs");
let data = Mock.mock({
    "pariseItem|1":[
        {
            "articleId|+1":1,
            "praiseCount|0-100":10,
            "praiseShow|1":false
        }
    ]
})

let parise = data.pariseItem;

const pariseRes =(config)=>{
    return parise
}

export default {
    pariseRes
}