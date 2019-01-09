import My from "../../components/my"

import PersonalInfo from "../../components/my/personalInfo";
import Follow from "../../components/my/follow"

export default (
    [
        {
            path:"/my",
            name:"my",
            component:My,
            meta:{
                flag:true,
                requireAuth:true
            }    
        },
        {
            path:"/personalInfo",
            name:"personalInfo",
            component:PersonalInfo
        },
        {
            path:"/follow",
            name:"follow",
            component:Follow
        }
    ]
)