export const getNum = (list,params)=>{
    let num=-1
    list.map((item,index)=>{
        if(item.articleId==params.articleId){
            num = index
            return num
        }
    })
    return num
}