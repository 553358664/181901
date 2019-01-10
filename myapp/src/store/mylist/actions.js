import axios from "axios";
export default {
    handleGoodsList({commit}){
        axios({
            method:"get",
            url:"http://localhost:3000/usergoods"
        })
        .then((data)=>{
            commit("handleGoodsList",data);
            // data.data.map((item)=>{
            //     item.flag = true;
            // })
            // commit("handleGoodsList",data.data);
        })
    }
}