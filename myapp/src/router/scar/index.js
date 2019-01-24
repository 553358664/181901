import sCar from "../../components/scar"
import payOk from "../../components/scar/payOk"
export default (
    [
        {
            path:"/scar",
            name:"scar",
            component:sCar,
            meta:{
                flag:false,
                requireAuth:true
            }
        },
        {
            path:"/payOk",
            name:"payOk",
            component:payOk,
            meta:{
                flag:false,
                requireAuth:true
            }
        }
    ]
)