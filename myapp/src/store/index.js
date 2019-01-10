import Vue from "vue";
import Vuex from "vuex";
import community from "./community";
import Mylist from "./mylist";
Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        community,
        Mylist
    }
})

export default store;