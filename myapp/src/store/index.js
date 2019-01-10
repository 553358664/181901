import Vue from "vue";
import Vuex from "vuex";
import community from "./community";
import small from "./small";
Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        community,
        small
    }
})

export default store;