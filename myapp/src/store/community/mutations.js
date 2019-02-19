import {getNum} from "../../utils/community/getNum"
export default {
    //获取首页花友圈数据
    handleArticle(state,params){
<<<<<<< HEAD
        state.articleList = [...state.articleList,...params]
        state.userId = localStorage.getItem("userId")    
        state.pageindexF++;
    },
    handleNearItems(state,params){
        state.nearItems =  [...state.nearItems,...params]
        state.pageindexN++;
    },
    handleSearch(state,params){
        state.searchArticle=params
    },
    handleTouchUp(state,params){
        state.fuzzyQuery = params
        state.fuzzyQuery.length = 5
    },
    //点赞
    handlePraiseF(state,params){
        if(Object.prototype.toString.call(arguments[1])=="[object Undefined]"){
            state.yn--            
        }else{           
            state.articleList[getNum(state.articleList,params)].praiseCount = params.praiseCount                      
            state.articleList[getNum(state.articleList,params)].praiseShow = params.praiseShow         
        }        
    },
    handlePraiseN(state,params){
   
        if(Object.prototype.toString.call(arguments[1])=="[object Undefined]"){
            state.yn--           
        }else{          
            state.nearItems[getNum(state.nearItems,params)].praiseCount = params.praiseCount
            state.nearItems[getNum(state.nearItems,params)].praiseShow = params.praiseShow           
        }        
    },
    //搜索信息
    handleHistory(state,params){
        state.my = params
    },
    handleHot(state,params){
        state.hot = params
    },
    handleDel(state){
        state.my=[]
    },

    handleSearch(state,params){
        state.searchArticle = params;
    },

    handleSearchAt(state,params){
        state.searchArticle = params;
    },
    changespeard(state,params){
        state.searchArticle[params].speard = !state.searchArticle[params].speard
    },
    handlepublish(state,params){
        if(params.code==1){
            state.publishCode++ 
        }else{
            state.publishCode==-1
        }       
=======
        state.articleList = params
    },
    attentionList(state,params){
        state.attention=params;
>>>>>>> master
    }
}