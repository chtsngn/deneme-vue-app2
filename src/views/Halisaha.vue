<template>
  <div class="halisaha">
    <v-container>
      <v-layout row justify-center align-center>
        <v-flex xs12 v-if="secilenHalisaha">
          <h1>{{ secilenHalisaha.ad }}</h1>
          <v-divider></v-divider>
          <v-slide-x-transition mode="out-in">
            <router-view></router-view>
          </v-slide-x-transition>
        </v-flex>
        <v-flex xs12 text-center v-else>
          <p class="h1 font-weight-light">HALISAHA BULUNAMADI!</p>
          <v-btn @click="git('anasayfa')">BENİ ÇIKAR BURADAN</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { /*mapState, mapMutations, mapActions, */mapGetters } from 'vuex'

export default {
  name: "Halisaha",
  data() {
    return {
      secilenHalisaha: null,
      secilenHalisahaId: null,
    }
  },
  computed: {
    ...mapGetters([
      "secilenHalisahaGetir",
      "idyeGoreHalisahaGetir",
    ]),
  },
  created() {
    this.secilenHalisahaId = this.$route.params.halisahaId;
    this.secilenHalisaha = this.idyeGoreHalisahaGetir({ halisahaId: this.secilenHalisahaId });
  },
}
</script>
