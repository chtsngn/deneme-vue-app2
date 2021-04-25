import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./plugins/router";
import store from "./plugins/store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

// GLOBALLER
Vue.mixin({
  methods: {
    git(name, params = {}) {
      this.$router.push({ name, params });
    },
    geriGit() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  },
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
