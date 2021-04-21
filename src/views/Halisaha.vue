<template>
  <div class="halisaha">
    <v-container>
      <v-layout row justify-center align-center>
        <v-flex xs12 v-if="secilenHalisaha">
          <h1>{{ secilenHalisaha.ad }}</h1>
          <v-divider></v-divider>
          <v-card>
            <v-card-title>
              Rezervasyon
            </v-card-title>
            <v-card-text>
              <v-container pa-0 grid-list-md>
                <v-layout row wrap>
                  <v-flex xs12 sm4 md3 lg2 v-for="(saat, i) in halisahaBilgiler.saatler" :key="i">
                    <v-card dark :color="saat.renk + ' darken2'">
                      <v-card-title>
                        <v-layout justify-space-between align-center>
                          <span>{{ saat.saat }}</span>
                          <span class="caption">({{ saat.durum }})</span>
                        </v-layout>
                      </v-card-title>
                      <v-card-text>
                        <v-layout align-center justify-space-between>
                          <v-flex v-if="saat.kod === 'BOS'" shrink class="pa-0">
                            <v-icon dense small class="pr-1">mdi-account-clock</v-icon>
                            <span class="caption font-weight-bold">{{ saat.islemYapanKullaniciSayisi }}</span>
                          </v-flex>
                          <v-flex v-else-if="saat.kod === 'DOLU'" class="pa-0">
                            <v-icon dense small class="pr-1">mdi-check-all</v-icon>
                          </v-flex>
                          <v-btn @click="git('rezervasyon', { saat })" v-if="saat.kod === 'BOS'" outlined x-small class="pa-0 ma-0 px-1">
                            REZERVASYON YAP
                          </v-btn>
                        </v-layout>
                      </v-card-text>
                    </v-card>
                  </v-flex>
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
import { /*mapState, mapMutations, mapActions, */mapGetters } from 'vuex'

export default {
  name: "Halisaha",
  data() {
    return {
      secilenHalisaha: null,
      secilenHalisahaId: null,
      halisahaBilgiler: {
        saatler: [
          { saat: "07:00 - 08:00", durum: "Boş", renk: "info", kod: "BOS", islemYapanKullaniciSayisi: 1 },
          { saat: "08:00 - 09:00", durum: "Dolu", renk: "error", kod: "DOLU", islemYapanKullaniciSayisi: "-" },
          { saat: "09:00 - 10:00", durum: "Dolu", renk: "error", kod: "DOLU", islemYapanKullaniciSayisi: "-" },
          { saat: "11:00 - 12:00", durum: "Boş", renk: "info", kod: "BOS", islemYapanKullaniciSayisi: 12 },
          { saat: "10:00 - 11:00", durum: "Dolu", renk: "error", kod: "DOLU", islemYapanKullaniciSayisi: "-" },
          { saat: "11:00 - 12:00", durum: "Boş", renk: "info", kod: "BOS", islemYapanKullaniciSayisi: 7 },
          { saat: "12:00 - 01:00", durum: "Dolu", renk: "error", kod: "DOLU", islemYapanKullaniciSayisi: "-" },
          { saat: "01:00 - 02:00", durum: "Dolu", renk: "error", kod: "DOLU", islemYapanKullaniciSayisi: "-" },
        ]
      },
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
