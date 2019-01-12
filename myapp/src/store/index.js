import Vue from "vue";
import Vuex from "vuex";
import community from "./community";

import register_login from "./register_login";

import small from "./small";

import Mylist from "./mylist";

import Mydraft from "./mydraft"
Vue.use(Vuex);
const store = new Vuex.Store({
    modules:{
        community,

        register_login,

        small,

        Mylist,

        Mydraft
    }
})

export default store;