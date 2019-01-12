import Vue from "vue";
import Vuex from "vuex";
import community from "./community";
import Mylist from "./mylist";
import Myarticle from "./myarticle";
Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        community,
        Mylist,
        Myarticle,
    }
})

export default store;