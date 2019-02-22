import state from "./state";
export default {
    result() {
        let orderSpend = 0;
        state.goodsSelect.map((item) => {
            orderSpend+=((item.number*(item.discountPrice*10))/10)
        })
        return orderSpend
    },
}