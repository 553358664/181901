import Vue from "vue";
import Vuex from "vuex";
import community from "./community";
import my from "./my";
Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        community,
        my
    }
})

export default store;