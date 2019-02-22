import axios from "axios";
export default {
  handleSCar({
    commit
  }) {
    axios({
      method: "post",
      url: "http://10.9.30.238:8080/findCartList",
      
    })
      .then((data) => {
        commit("handleSCarM", data)
      })
  },
  handleAddSCar({
    commit
  }, params) {
    axios({
      method: "post",
      url: "http://10.9.30.238:8080/addCart",
      data: {
        goodId: params.goodId,
        number: params.number,
        color: params.color,
        discountPrice: params.discountPrice,
        price: params.price
      }
    })
      .then((data) => {
        
      })
  },
  handleToOrder({ commit, state, rootState }) {
    rootState.small.goodsSelect = [];
    state.sCarList.map((item) => {
      if (item.flagCheck) {
        rootState.small.goodsSelect.push(item)
      }
    })
  },
  handleAdd({ commit, state }, index) {
    let id = state.sCarList[index].id
    let num = ++state.sCarList[index].number;
    axios({
      method: "post",
      url: "http://10.9.30.238:8080/updateCartNumber",
      data: {
        id: id,
        number: num,
        //id: state.sCarList[index].id,
      }
    })
      .then((data) => {
        commit("handleAddM", data)
      })
  },
  handleDel({ commit, state, dispatch }, index) {
    let id = state.sCarList[index].id
    axios({
      method: "post",
      url: "http://10.9.30.238:8080/deleteCartById",
      data: {
        id: id,
        //id: state.sCarList[index].id,
      }
    })
      .then(() => {
        dispatch("handleSCar")
      })
  },
  handleReduce({ commit, state }, index) {
    if (state.sCarList[index].number <= 1) {
      state.sCarList[index].number = 1
    } else {
      --state.sCarList[index].number
    }
    let id = state.sCarList[index].id
    let num = state.sCarList[index].number;
    console.log(id, num)
    axios({
      method: "post",
      url: "http://10.9.30.238:8080/updateCartNumber",
      data: {
        number: num,
        //id: state.sCarList[index].id,
        id: id,
      }
    })
      .then((data) => {
        commit("handleReduceM", data)
      })
  },
  handleCheck({ commit, state }, index) {
    state.sCarList[index].flagCheck = !(state.sCarList[index].flagCheck)
    let id = state.sCarList[index].id
    //let flagCheck = state.sCarList[index].flagCheck
    axios({
      method: "post",
      url: "http://10.9.30.238:8080/updateCartFlag",
      data: {
        flagCheck: state.sCarList[index].flagCheck,
        id: id,
      }
    })
      .then((data) => {
        commit("handleCheckM", data)
      })
  },
  handleCartPay({ commit, state, rootState }) {
   /*  let len = rootState.small.goodsSelect.length;
    let arr=[]
    for (let i = 0; i < len; i++){
      arr.push(rootState.small.goodsSelect[i].id)
    } */
    console.log(rootState.small.goodsSelect)
    axios({
      method: "post",
      url: "http://10.9.30.238:8080/buyFromCart",
      data: {
        carts: JSON.stringify(rootState.small.goodsSelect)
      }
    }).then(data => { 
      console.log(1);
    })
  },
  handleJustBuy({ commit, state, rootState }) {
    /*  let len = rootState.small.goodsSelect.length;
     let arr=[]
     for (let i = 0; i < len; i++){
       arr.push(rootState.small.goodsSelect[i].id)
     } */
     axios({
       method: "post",
       url: "http://10.9.30.238:8080/buy",
       data: {
         good: JSON.stringify(rootState.small.goodsSelect)
       }
     }).then(data => { 
       
     })
   },
  handleLeave({ commit, state }) {
    let arr = [];
    for (let i = 0; i < state.sCarList.length; i++){
      var obj = {};
      obj.id = state.sCarList[i].id,
      obj.flagCheck= state.sCarList[i].flagCheck 
      arr.push(obj)
    }
    console.log(arr)
    axios({
      method: "post",
      url: "http://10.9.30.238:8080/updateCartAll",
      data: {
        obj: JSON.stringify(obj)
      }
    })
  }
  /* handleCheckAll(state) {
    state.checkAll = !state.checkAll;
    state.sCarList.map((item) => {
      item.flagCheck = state.checkAll
    })
    axios({
      method: "post",
      url: "http://10.9.30.238:8080/updateCartFlag",
      data: {
        flagCheck:state.sCarList[index].flagCheck,
        id: id,
      }
    })
      .then((data) => {
       
      })
  }, */

}
