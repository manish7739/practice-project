<template>
  <div>
    <v-container>
      <v-card width="500" height="90vh" class="ml-16">
        <v-card width="300" height="70vh" class="mx-auto">
          <v-text-field
            label=" Name"
            v-model="name"
            dense
            outlined
            required
          ></v-text-field>
          <v-text-field
            label="Mobile Number"
            dense
            v-model="phone"
            outlined
          ></v-text-field>
          <v-text-field
            label="Email"
            v-model="email"
            dense
            outlined
          ></v-text-field>
          <v-text-field
            label="Password"
            v-model="password"
            dense
            type="password"
            outlined
          ></v-text-field>

          <v-btn rounded block color="deep-purple lighten-1" @click="signupme"
            >Sign Up</v-btn
          >
        </v-card>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import signup from '~/actions/signup'
export default {
  name: 'SignUp',
  data() {
    return {
      name: ' ',
      phone: ' ',
      email: '',
      password: '',
    }
  },
  methods: {
    async signupme() {
      const data = {
        name: this.name,
        phone: this.phone,
        email: this.email,
        password: this.password,
      }
      console.log(data)
      signup.signup(data, (err, res) => {
        if (err) {
          console.log(err)
        } else {
          console.log('hello')
          console.log(res)
        }
      })
    },
  },
  // data: () => ({
  //   valid: true,
  //   Firstname: '',
  //   FirstnameRules: [
  //     (v) => !!v || 'Name is required',
  //     (v) => (v && v.length <= 10) || 'Name must be 10 characters',
  //   ],
  //   mobileNumber: '',
  //   mobileNumberRules: [
  //     (v) => !!v || 'Mobile Number is required',
  //     (v) => (v && v.length <= 10) || 'Name must be 10 characters',
  //   ],
  //   email: '',
  //   emailRules: [
  //     (v) => !!v || 'E-mail is required',
  //     (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
  //   ],
  //   password: '',
  //   passwordRules: [
  //     (v) => !!v || 'Password is required',
  //     (v) => (v && v.length <= 10) || 'Password must be Valid',
  //   ],

  // }),
}
</script>

<style lang="scss" scoped></style>
