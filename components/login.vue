<template>
  <div>
    <div>
      <v-card width="400" class="mx-auto">
        <v-card-text>
          <v-layout justify-center>
            <v-avatar size="100" class="my-3">
              <v-icon size="100">mdi-account</v-icon>
            </v-avatar>
          </v-layout>

          <v-text-field label="Email" filled rounded></v-text-field>
          <v-text-field label="Password" filled rounded></v-text-field>

          <v-btn rounded block color="deep-purple lighten-1">Login</v-btn>

          <p class="text-center mt-2">
            <span>Forgot UserName</span> | <span>Password</span>
          </p>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    LoginCard: {
      type: Array,
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
