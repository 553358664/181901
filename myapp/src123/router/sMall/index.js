import sMall from "../../components/small/"
import goodsDetail from "../../components/small/goodsDetail.vue"
import submitOrder from "../../components/small/submitOrder.vue"
//王金利 商城 调试路由
import jxhq from "../../components/small/wang/jxhq";
import dpxx from "../../components/small/wang/dpxx";
import hccs from "../../components/small/wang/hccs";
import hcyh from "../../components/small/wang/hcyh";
import xptj from "../../components/small/wang/xptj";
import about from "../../components/small/wang/hccs/about";
export default (
  [{
      path: "/small",
      name: "small",
      component: sMall,
      meta: {
        flag: true,
        requireAuth: true
      }
    },
    {
      path: "/goodsDetail/:id",
      name: "goodsDetail",
      component: goodsDetail,
      meta: {
        flag: false,
        requireAuth: true
      }
    },
    {
      path: "/submitOrder",
      name: "submitOrder",
      component: submitOrder,
      meta: {
        flag: false,
        requireAuth: true
      }
    },
    //王金利 商城 调试路由
    {
    	path:"/jxhq",
    	component:jxhq,
    	name:"jxhq",
    	meta:{
        flag:false,
        requireAuth:true
      }
    },
    {
    	path:"/hccs",
    	component:hccs,
      name: "hccs",
      meta:{
        flag:false,
        requireAuth:true
      }
    },
     {
    	path:"/hcyh",
    	component:hcyh,
    	name:"hcyh"
    },
    {
    	path:"/xptj",
    	component:xptj,
    	name:"xptj"
    },
    {
    	path:"/about",
    	component:about,
    	name:"about"
    },
    {
    	path:"/dpxx",
    	component:dpxx,
    	name:"dpxx"
    }
  ]
)
