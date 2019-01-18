import Vue from "vue";
import Vuex from "vuex";
import community from "./community";
import my from "./my";
import Myarticle from "./myarticle";
Vue.use(Vuex);
import register_login from "./register_login";
import small from "./small";
<<<<<<< HEAD


import Mydraft from "./mydraft"
=======
import Mylist from "./mylist";
>>>>>>> 72220bf217cf8ddee7ec5b3d5037c864a13ce3e0
Vue.use(Vuex);
const store = new Vuex.Store({
    modules:{
        community,
        my,
        register_login,
        small,

        Mylist,

        Mydraft,

        Myarticle,
    }
})

export default store;