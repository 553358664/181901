import Vue from "vue";
import Vuex from "vuex";
import community from "./community";
import my from "./my";
import Myarticle from "./myarticle";
import register_login from "./register_login";
import scar from "./scar"
import small from "./small";
import Mylist from "./mylist";
Vue.use(Vuex);
const store = new Vuex.Store({
    modules:{
        community,
        my,
        register_login,
        small,
        Mylist,
        Myarticle,
        scar,
    }
})

export default store;