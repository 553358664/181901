import Vue from "vue";
import Vuex from "vuex";
import community from "./community";
import my from "./my";
import register_login from "./register_login";
import scar from "./scar"
import small from "./small";

// import Mylist from "./mylist";
Vue.use(Vuex);
const store = new Vuex.Store({
    modules:{
        community,
        my,
        register_login,

        small,
        scar,
        // Mylist
    }
})

export default store;