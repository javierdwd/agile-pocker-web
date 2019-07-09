<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";

import {
  CREATE_USER,
  LOAD_USER
} from "./store/modules/settingsStore/mutation-types";

export default {
  name: "App",
  methods: {
    ...mapActions("settings", [CREATE_USER, LOAD_USER])
  },
  async created() {
    let userId = localStorage.getItem("userId");

    try {
      if (!userId) {
        userId = await this[CREATE_USER]();
        localStorage.setItem("userId", userId);

        this[LOAD_USER](userId);
      } else {
        this[LOAD_USER](userId);
      }
    } catch (error) {
      console.error(error);
    }
  }
};
</script>
