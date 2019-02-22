const Mock  = require("mockjs");
let data = Mock.mock({
    "data|10":[
        {   
            "myListId|+1":1,
            "userId":'@natural(0,9999)',
            "orderStatus":'@natural(1,4)',
            "goodsName":'@csentence(2,8)',
            "goodsDescription":'@csentence(1,20)',
            "goodsSize":'@csentence(2,8)',
            "goodsImg":"@Image('100x40','#c33', '#ffffff','封面')",
            "goodsPrice":'@float(0,999,1,1)',
            "goodsNum":"@natural(1,99)",
            "orderCreateTime":'@date("MM dd")'
        }
    ]
})
let MyList = data.data;
const myList = (config)=>{
    return MyList
}
export default {
    myList
}