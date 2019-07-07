import Vue from "vue";
import Vuex from "vuex";

import cardsBoard from "./modules/cardsBoardStore";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cardsBoard
  }
});
