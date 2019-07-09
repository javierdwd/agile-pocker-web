import { CHANGE_USERNAME } from "./mutation-types";

const state = {
  user: {
    id: "",
    name: "Javi",
    createdAt: ""
  }
};

const mutations = {
  [CHANGE_USERNAME](state, payload) {
    state.user = Object.assign({}, state.user, {
      name: payload
    });
  }
};

const actions = {
  [CHANGE_USERNAME]({ commit }, payload) {
    commit(CHANGE_USERNAME, payload);
  }
};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
