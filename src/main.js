import Vue from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import axios from "./services/axios";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
new Vue({
  render: (h) => h(App),
}).$mount("#app");
