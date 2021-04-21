<template>
  <div class="halisaha">
    <v-container>
      <v-layout row justify-center align-center>
        <v-flex xs12 v-if="secilenHalisaha">
          <h1>{{ secilenHalisaha.ad }}</h1>
          <v-divider></v-divider>
          <v-card>
            <v-card-title>
              Rezervasyon Bilgileri
            </v-card-title>
            <v-card-text>
              <v-container pa-0 grid-list-md>
                <v-layout row wrap>
                    
                </v-layout>
              </v-container>
            </v-card-text>
          </v-card>
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
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            saatBilgileri: null,
            secilenHalisaha: null,
            secilenHalisahaId: null,
        }
    },
    created() {
        console.log(this.$route.params);
        if (!this.$route.params || !this.$route.params.saat)
            this.git("halisaha");

        this.secilenHalisahaId = this.$route.params.halisahaId;
        this.secilenHalisaha = this.idyeGoreHalisahaGetir({ halisahaId: this.secilenHalisahaId });
    },
    computed: {
        ...mapGetters([
            "secilenHalisahaGetir",
            "idyeGoreHalisahaGetir",
        ]),
    },
}
</script>

<style>

</style>