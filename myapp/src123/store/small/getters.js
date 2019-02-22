import state from "./state";
export default {
    result() {
        let orderSpend = 0;
        state.goodsSelect.map((item) => {
            orderSpend+=((item.goodsNum*(item.goodsPrice*10))/10)
        })
        return orderSpend
    },
}