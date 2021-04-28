<template>
  <div class="deep-orange" width="100%" height="70%">
    <v-row>
      <v-col cols="12" sm="3" md="3">
        <div class="text-center">
          <p class="display-2">DIGAUT</p>
          <p color="white">
            <v-icon color="white" height="4px"> mdi-cellphone-android </v-icon>
            +91-8445399658
          </p>

          <p><v-icon color="white" s> mdi-email </v-icon>client@digaut.com</p>
          <p class="title">Get in touch</p>
          <p>
            <v-icon color="white"> mdi-facebook </v-icon>
            <v-icon color="white"> mdi-instagram </v-icon>
            <v-icon color="white"> mdi-twitter </v-icon>
            <v-icon color="white"> mdi-linkedin </v-icon>
          </p>
        </div>
      </v-col>
      <v-col cols="12" sm="2" md="2">
        <div class="text-center title">
          <p class=""><u>EXPLORE</u></p>
          <div>
            <v-list color="deep-orange" dark>
              <v-list-item-group color="primary">
                <v-list-item v-for="(item, i) in explore" :key="i">
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="2" md="2">
        <div class="text-center title">
          <p><u>OUR SERVICES</u></p>
          <v-list color="deep-orange" dark>
            <v-list-item-group color="primary">
              <v-list-item v-for="(item, i) in services" :key="i">
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </div>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13776.300064476458!2d78.0462875!3d30.320384!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3d4a10dd5422e8dd!2sDigaut%20Software%20Company!5e0!3m2!1sen!2sin!4v1617783917685!5m2!1sen!2sin"
          width="450"
          height="300"
          class="mt-10"
          style="border: 2px"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      explore: [
        { text: 'Home', icon: 'mdi-clock' },
        { text: 'Services', icon: 'mdi-account' },
        { text: 'Technologies', icon: 'mdi-flag' },
        { text: 'Our Projects', icon: 'mdi-flag' },
        { text: 'About Us', icon: 'mdi-flag' },
        { text: 'contact Us', icon: 'mdi-flag' },
      ],
      services: [
        { text: 'App Developement', icon: 'mdi-clock' },
        { text: 'web Developement', icon: 'mdi-account' },
        { text: 'Graphic designing', icon: 'mdi-flag' },
        { text: 'Digital Marketing', icon: 'mdi-flag' },
        { text: '3D Animation', icon: 'mdi-flag' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
