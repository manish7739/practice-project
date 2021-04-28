<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app>
      <img src="/digaut-logo.png" width="160" height="60" />
      <v-spacer></v-spacer>
      <v-btn
        color="success"
        v-for="(item, i) in items"
        :key="i"
        router
        :to="item.to"
        exact
        plain
      >
        {{ item.title }}
      </v-btn>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'About Us',
          to: '/about-us',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Services',
          to: '/services',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Contact Us',
          to: '/contact',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Our Projects',
          to: '/project-page',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Login',
          to: '/loginpage',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'SignUp',
          to: '/signUpPage',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Barbell',
    }
  },
}
</script>
