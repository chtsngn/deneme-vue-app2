import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// State
const state = {
  secilenHalisaha: null,
  halisahalar: [
    { id: '54_SERDIVAN_HALISAHA_ID', ad: 'Serdivan Halısaha' },
  ],
};

// Getters
const getters = {
  halisahalariGetir(state) {
    return state.halisahalar;
  },
  secilenHalisahaGetir(state) {
    return state.secilenHalisaha;
  },
  idyeGoreHalisahaGetir(state) {
    return (p = {}) => state.halisahalar.find(halisaha => halisaha.id === p.halisahaId);
  }
};

// Mutations
const mutations = {
  halisahaSecildi(state, p) {
    state.secilenHalisaha = p.halisaha;
  }
};

// Actions
const actions = {
  halisahaSecildi(context, p) {
    context.commit("halisahaSecildi", p);
  }
};

// Modules
const modules = {};

export default new Vuex.Store({
  // Durumlar
  state,
  // State'i manipüle edip döndürmek için kullanılıyor
  getters,
  // State'i setlemek için kullanılıyor (async olamaz)
  mutations,
  // Mutate'i tetiklemek (dispatch) için kullanılıyor (async olabilir)
  actions,
  // Modül modül tutmaya yarıyor
  modules,
});
