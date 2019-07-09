<template>
  <LayoutDefault>
    <section class="vw-settings">
      <div class="l-container">
        <h1>Settings</h1>
      </div>

      <div class="l-container">
        <form action="#">
          <label for="username">Username</label>
          <input type="text" v-model.trim="username" />
        </form>
      </div>
    </section>
  </LayoutDefault>
</template>

<script>
import { mapState, mapActions } from "vuex";

import { CHANGE_USERNAME } from "../../store/modules/settingsStore/mutation-types";

export default {
  name: "Settings",
  computed: {
    ...mapState("settings", ["user"]),

    username: {
      set(username) {
        this[CHANGE_USERNAME](username);
      },
      get() {
        return this.user.name;
      }
    }
  },
  methods: {
    ...mapActions("settings", [CHANGE_USERNAME])
  }
};
</script>
