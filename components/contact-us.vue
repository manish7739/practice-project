<template>
  <div>
    <h1 class="text-center mt-15 display-2">CONTACT US</h1>
    <v-row class="mt-10">
      <v-col cols="12" sm="6" md="6">
        <v-img
          class="ml-15"
          src="https://digaut.com/svgs/contact-us.svg"
          width="85%"
          height="60vh"
        ></v-img>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="name"
            :counter="20"
            :rules="nameRules"
            prepend-icon="mdi-account"
            label="Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="MobileNumber"
            :counter="10"
            :rules="nameRules"
            prepend-icon="mdi-cellphone-android"
            label="Mobile number"
            required
          ></v-text-field>

          <v-text-field
            :rules="emailRules"
            prepend-icon="mdi-email"
            label="E-mail"
            required
          ></v-text-field>

          <v-select
            v-model="select"
            :items="items"
            :rules="[(v) => !!v || 'Item is required']"
            prepend-icon="mdi-menu"
            label="Subjects"
            required
          >
          </v-select>

          <v-checkbox
            v-model="checkbox"
            :rules="[(v) => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required
          ></v-checkbox>

          <v-btn color="error" class="mr-4" @click="reset"> RESET FORM </v-btn>

          <v-btn color="warning" @click="resetValidation"> SUBMIT </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => (v && v.length <= 20) || 'Name must be less than 10 characters',
    ],

    MobileNumber: '',
    MobileNumberRules: [
      (v) => !!v || 'MobileNumber is required',
      (v) => (v && v.length == 10) || 'Mobile Number must be 10 characters',
    ],

    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    select: null,
    items: [
      'Web Developement',
      'App Developement',
      'Didital Marketing',
      'Desktop App',
      'Software maintenance',
    ],
    checkbox: false,
  }),

  methods: {
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
  },
}
</script>

<style lang="scss" scoped></style>
