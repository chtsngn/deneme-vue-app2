<template>
  <div class="rezervasyon">
    <v-card color="transparent">
      <v-card-title>
        Rezervasyon Bilgileri
      </v-card-title>
      <v-card-text>
        <v-container pa-0 grid-list-md>
          <v-layout row wrap align-center>
            <v-flex xs6>
              <v-card>
                <v-card-text>
                  <v-text-field outlined dense label="Ad soyad *" required></v-text-field>
                  <v-text-field outlined dense label="Telefon *" required></v-text-field>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs6>
              <v-card>
                <v-card-text>
                  vbtn
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
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
    if (!this.$route.params || !this.$route.params.saat)
        this.git("halisaha");

    this.secilenHalisahaId = this.$route.params.halisahaId;
    this.secilenHalisaha = this.idyeGoreHalisahaGetir({ halisahaId: this.secilenHalisahaId });
  },
  computed: {
    ...mapGetters([
        "idyeGoreHalisahaGetir",
    ]),
  },
}
</script>

<style>

</style>