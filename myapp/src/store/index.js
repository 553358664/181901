import Vue from "vue";
import Vuex from "vuex";
import community from "./community";
import my from "./my";
import Mylist from "./mylist";
import Myarticle from "./myarticle";
Vue.use(Vuex);

import register_login from "./register_login";

import small from "./small";
Vue.use(Vuex);
const store = new Vuex.Store({
    modules:{
        community,
        my,
        register_login,
        small,
        Mylist,
        Myarticle,
    }
})

export default store;