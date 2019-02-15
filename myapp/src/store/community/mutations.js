export default {
    handleArticle(state,params){
        state.articleList = [...state.articleList,...params]
        state.pageindex++;
    },
    handleNearItems(state,params){
        state.nearItems = params
    },
    handleSearch(state,params){
        state.fuzzyQuery = params
        state.fuzzyQuery.length = 10
    },
    handleTouchUp(state,params){
        state.fuzzyQuery = params
        state.fuzzyQuery.length = 10
    },
    // handlePicShow(state,params){
    //     state.articleList = params
    // }
}