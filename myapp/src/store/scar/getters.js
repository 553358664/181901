import state from "./state";
export default {
    result() {
        let orderSpend = 0;
        state.sCarList.map((item) => {
            if (item.flagCheck) {
                orderSpend += ((item.number*(item.discountPrice*10))/10)
            }
        })
        return orderSpend
    },
}