<template>
  <v-container :fluid="$vuetify.breakpoint.xsOnly" fill-height>
    <v-layout row align-center justify-center fill-height>
      <v-flex xs12>
        <v-card class="rounded-xl" color="#FFFFFF77">
          <v-card-title>
            <v-layout column>
              <h3>Halısaha</h3>
              <p class="body-2">Bilgilerini görüntülemek istediğiniz halısahayı seçiniz</p>
            </v-layout>
          </v-card-title>
          <v-card-text>
            <v-autocomplete
              v-model="secilen"
              item-value="id"
              item-text="ad"
              :items="halisahalar"
              autofocus
              rounded
              clearable
              solo-inverted
              label="Lütfen halısaha seçiniz"
              hide-details
              return-object
            ></v-autocomplete>
          </v-card-text>
          <v-card-actions>
            <v-layout row justify-center align-center>
              <v-btn :disabled="!secilen" large rounded color="success" @click="halisahaSec()">İLERİ</v-btn>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Anasayfa',
  components: {},
  data() {
    return {
      halisahalar: [],
      secilen: null,
    }
  },
  created() {
    this.halisahalar = this.halisahalariGetir;
    console.log("GİRİK");
  },
  computed: {
    ...mapGetters([
      "halisahalariGetir",
    ]),
  },
  methods: {
    ...mapActions([
      "halisahaSecildi",
    ]),
    git(name, params = null) {
      this.$router.push({ name, params });
    },
    halisahaSec() {
      this.halisahaSecildi({ halisaha: this.secilen });
      this.git("halisaha", { halisahaId: this.secilen.id });
    },
  }
}
</script>
