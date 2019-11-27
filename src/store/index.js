import Vue from "vue";
import Vuex from "vuex";
import cagematch from "./modules/cagematchStore";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cagematch
  }
});
