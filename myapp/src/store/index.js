import Vue from "vue";
import Vuex from "vuex";
import community from "./community";
import register_login from "./register_login";
Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        community,
        register_login
    }
})

export default store;