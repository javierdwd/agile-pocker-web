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
    name: "Javi",
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
  [CHANGE_USERNAME]({ commit }, payload) {
    commit(CHANGE_USERNAME, payload);
  },
  async [CREATE_USER]() {
    return (
      await db.collection("users")
              .add({
              createdAt: firebase.firestore.FieldValue.serverTimestamp(),
              name: ""
            })
    ).id
  },
  async [LOAD_USER]({ commit }, payload) {
    const userRef = await db.collection("users").doc(payload).get();

    if(!userRef.exists) {
      throw new Error("User doesn't exist");
    }

    const data = userRef.data();

    commit(SET_USER, {
      id: payload,
      createdAt: data.createdAt.toDate(),
      name: data.name,
    });
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
