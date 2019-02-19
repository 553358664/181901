const Mock  = require("mockjs");
let data = Mock.mock({
    "publish|1":[
        {
           "code":1,
            "msg":"成功"
        }
    ]
})



let publishData = data.publish;

const publish =(config)=>{
    return publishData
}

export default {
    publish
}