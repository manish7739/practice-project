<template>
  <div class="orange lighten-1">
    <v-row>
      <v-col cols="12" sm="4" md="4" class="mt-16">
        <div class="display-2 white--text">
          <p class="text-center mt-16">WELCOME TO</p>
          <h2 class="text-center">{DIGAUT}</h2>
        </div>
      </v-col>
      <v-col cols="12" sm="8" md="8">
        <v-img
          src="https://digaut.com/background-orange.svg"
          width="90%"
          height="81vh"
        ></v-img>
      </v-col>
    </v-row>

    <center>
      <v-btn
        class="mx-2"
        fab
        dark
        color="indigo"
        @click="$vuetify.goTo('#aboutSection')"
      >
        <v-icon white>mdi-chevron-double-down </v-icon>
      </v-btn>
    </center>
  </div>
</template>

<script>
export default {
  name: 'Demo',
}
</script>

<style lang="scss" scoped></style>
