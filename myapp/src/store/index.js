import Vue from "vue";
import Vuex from "vuex";
import community from "./community";

import register_login from "./register_login";

import small from "./small";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        community,

        register_login,

        small

    }
})

export default store;