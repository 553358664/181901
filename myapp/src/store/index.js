import Vue from "vue";
import Vuex from "vuex";
import community from "./community";
import my from "./my";
import Myarticle from "./myarticle";
import register_login from "./register_login";
import scar from "./scar"
import small from "./small";
import Mydraft from "./mydraft"
import Mylist from "./mylist";
import searchActicle from "./searchActicle";
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
        scar,
<<<<<<< HEAD
        searchActicle
        // Mylist
=======
>>>>>>> master
    }
})

export default store;