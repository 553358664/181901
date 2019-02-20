import axios from "axios";
export default {
    handleAtList({commit},params){
        axios({
            method:"post",
            url:"/article",
            data:{
                value:params
            }
        })
        .then((data)=>{   
            console.log(data)
            data.map((item)=>{
                //该文章长度默认不需要展开
                item.speard = false;
            })
            commit("handleAtList",data);  
        })
    }
}