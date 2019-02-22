import axios from "axios";
export default {
    handleGoodsList({commit}){
        axios({
            method:"post",
            url:"http://10.9.30.238:8080/myList"
        })
        .then((data)=>{         
            //改变订单视窗1,2,3,4是否有订单的状态,以及未支付中是否被选中
            data.map((item)=>{
                commit("changevp",item.status);    
                item.checkflag = false;
            })
            commit("handleGoodsList",data);
        })
    }
}