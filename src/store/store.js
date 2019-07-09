import Vue from "vue";
import Vuex from "vuex";

import settings from "./modules/settingsStore";
import cardsBoard from "./modules/cardsBoardStore";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    settings,
    cardsBoard
  }
});
