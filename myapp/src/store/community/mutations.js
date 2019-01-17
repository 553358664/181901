export default {
    handleArticle(state,params){
        state.articleList = params
    },
    handleNearItems(state,params){
        state.nearItems = params
    },
    handleSearch(state,params){
        state.fuzzyQuery = params
    },
    handleTouchUp(state,params){
        state.searchList =params
    }
    // handlePicShow(state,params){
    //     state.articleList = params
    // }
}