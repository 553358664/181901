import Vue from "vue";
import Vuex from "vuex";
import community from "./community";
<<<<<<< HEAD
import register_login from "./register_login";
=======
import small from "./small";
>>>>>>> dd5954cd1a63568edea06cf789d757bf5f739551
Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        community,
<<<<<<< HEAD
        register_login
=======
        small
>>>>>>> dd5954cd1a63568edea06cf789d757bf5f739551
    }
})

export default store;