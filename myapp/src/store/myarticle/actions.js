import axios from "axios";
export default {
    handleAtList({commit}){
        axios({
            method:"get",
            url:"/article"
        })
        .then((data)=>{   
            data.map((item)=>{
                //该文章长度默认不需要展开
                item.speard = false;
            })
            commit("handleAtList",data);  
        })
    }
}