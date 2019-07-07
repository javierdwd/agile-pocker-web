import { CHOSEN_CARD } from "./mutation-types";

const state = {
  activeBoard: "standard",
  boards: [
    {
      id: "standard",
      name: "Standard",
      cards: [
        { value: 0, label: "0" },
        { value: 0.5, label: "1/2" },
        { value: 1, label: "1" },
        { value: 2, label: "2" },
        { value: 3, label: "3" },
        { value: 5, label: "5" },
        { value: 8, label: "8" },
        { value: 13, label: "13" },
        { value: 20, label: "20" },
        { value: 40, label: "40" },
        { value: 100, label: "100" },
        { value: "infinity", label: "∞" },
        { value: "?", label: "?" },
        { value: "coffee", label: "☕" }
      ]
    }
  ],
  chosenCard: null
};

const mutations = {
  [CHOSEN_CARD](state, payload) {
    state.chosenCard = payload;
  }
};

const actions = {};

const getters = {
  cards(state) {
    return state.boards.find(el => el.id === state.activeBoard).cards;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
