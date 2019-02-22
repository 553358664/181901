const Mock = require("mockjs");
let data = Mock.mock({
  "data|5": [{
    "goodsId|+1": 1,
    "goodsImg": "@image('200x200', '#50B347', '#FFF', 'Mock.js')",
    "goodsName": "@ctitle(5)",
    "goodsPrice|20-40": 23.45,
    "goodsOldPrice|50-100": 100,
    "goodsSize":"黄色",
    "goodsNum|1-9": 3,
    "flagCheck": false
  }]
})
//let discount = data.data;
const scar = (config) => {
    return data.data
}
export default {
   scar
}