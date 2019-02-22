const Mock = require("mockjs");
let data = Mock.mock({
  "data|10": [{
    "goodsId|+1": 1,
    "goodsImg": "@image('200x200', '#50B347', '#FFF', 'Mock.js')",
    "goodsName": "@ctitle(5)",
    "goodsDetail": "@image('200x200', '#50B347', '#FFF', 'Mock.js')",
    "goodsPrice|20-40": 23.45,
    "goodsOldPrice|50-100": 100,
    "goodsDescription": "@ctitle(14)",
    "goods|5": [{
      "name": "@cname",
    }]
  }]
})
//let discount = data.data;
const discount = (config) => {
    return data.data
}
const find = (config) => {
    var id = config.url.split("?")[1]
    let goods = data.data.filter(function(item){
        if(item.goodsId == id){
            return item
        }
    })
    return goods 
}
export default {
    discount,
    find
}