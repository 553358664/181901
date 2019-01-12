import axios from "axios";
export default {
    handleGoodsList({commit}){
        axios({
            method:"get",
            url:"http://localhost:3000/usergoods"
        })
        .then((data)=>{
            commit("handleGoodsList",data);
            
            //改变订单视窗1,2,3,4是否有订单的状态,以及未支付中是否被选中
            data.map((item)=>{
                commit("changevp",item.state);
                console.log(this);
                // this._vm.$get
            })

        })
    }
    
}