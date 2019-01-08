import Vue from "vue";
import Vuex from "vuex";
import community from "./community";
Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        community
    }
})

export default store;