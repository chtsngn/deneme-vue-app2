<template>
  <v-card class="rounded-xl" color="#FFFFFF77">
    <v-card-title>
      <slot name="baslik"></slot>
    </v-card-title>
    <v-card-text>
      <slot name="icerik"></slot>
    </v-card-text>
    <v-card-actions>
      <slot name="akyison"></slot>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  
}
</script>

<style>

</style>