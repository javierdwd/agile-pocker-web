import Vue from "vue";

// Global styles.
import "./assets/styles/main.scss";

// Vue components.
import App from "./App.vue";
import LayoutDefault from "./layouts/LayoutDefault";

// Plugins.
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;

Vue.component("LayoutDefault", LayoutDefault);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
