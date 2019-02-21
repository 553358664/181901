import {pathParams} from "../utils/database";
const Mock  = require("mockjs");
let data = Mock.mock({
    "data|12": [{
        "id|+1": 1,
        "headPic": "@image('63x63', '#F44C36', '#FFF', 'headPic')",
        "username": "@cname",
        "ID": /[0-9]/,
        "time": "@date('yyyy-MM-dd')",
        "autograph": "@cparagraph()",
        "title": "@cparagraph(1)",
        "writin": "@cparagraph(2,3)",
        "cover": "@image('120x120', '#F44C36', '#FFF', 'title')",
        "adress": "@county(true)",
        "speak": "@cparagraph(1)",
        "sex": "女"
    }
    ]
})
let My = data.data;
const my = (config)=>{
    return My
}
export default {
    my
}