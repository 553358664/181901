<template>
    <div class="none">
        <Noatten-com/>
        <Intersted-com/>
    </div>
</template>
                                                   
<script>
import Vuex from "vuex";
import Noatten from "./components/noattention.vue" ;
import Intersted from "./components/intersted" ;
export default {
    components:{
        "Noatten-com": Noatten,
        "Intersted-com":Intersted 
    }
}
</script>
<style>

</style>