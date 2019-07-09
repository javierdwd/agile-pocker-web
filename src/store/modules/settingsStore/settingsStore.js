import firebase, { db } from "../../firebase/firebase";

import {
  CREATE_USER,
  LOAD_USER,
  SET_USER,
  CHANGE_USERNAME
} from "./mutation-types";

const state = {
  user: {
    id: "",
    name: "",
    createdAt: ""
  }
};

const mutations = {
  [SET_USER](state, payload) {
    state.user = payload;
  },
  [CHANGE_USERNAME](state, payload) {
    state.user = Object.assign({}, state.user, {
      name: payload
    });
  }
};

const actions = {
  async [CHANGE_USERNAME]({ commit, state }, payload) {
    try {
      const userRef = db.collection("users").doc(state.user.id);

      await userRef.update({
        name: payload
      });

      commit(CHANGE_USERNAME, payload);
    } catch (error) {
      console.error(error);
    }
  },

  async [CREATE_USER]() {
    return (await db.collection("users").add({
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      name: ""
    })).id;
  },

  async [LOAD_USER]({ commit }, payload) {
    try {
      const userRef = db.collection("users").doc(payload);
      const userData = (await userRef.get()).data();

      commit(SET_USER, {
        id: payload,
        createdAt: userData.createdAt.toDate(),
        name: userData.name
      });
    } catch (error) {
      console.error("User doesn't exist");
    }
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
