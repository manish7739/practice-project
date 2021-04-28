<template>
  <div>
    <ServicesPage :serviceCard="services" />
  </div>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      services: [
        {
          color: 'indigo lighten-5',
          icon: 'mdi-cellphone-android',
          title: 'App Developement',
          subTitle: 'Think outside the box',
          description: `DIGAUT has highly skilled team of mobile app developers working together to deliver unique and attractive mobile application to our clients. Our skilled team provide plan, strategy, design, implement, deploy, security for the development of mobile applications. We deliver high-quality standalone mobile application.`,
        },
        {
          color: 'red lighten-3',
          icon: 'mdi-cellphone-android',
          title: 'App Developement',
          subTitle: 'Think outside the box',
          description: `DIGAUT has highly skilled team of mobile app developers working together to deliver unique and attractive mobile application to our clients. Our skilled team provide plan, strategy, design, implement, deploy, security for the development of mobile applications. We deliver high-quality standalone mobile application.`,
        },
        {
          color: 'purple lighten-2',
          icon: 'mdi-cellphone-android',
          title: 'App Developement',
          subTitle: 'Think outside the box',
          description: `DIGAUT has highly skilled team of mobile app developers working together to deliver unique and attractive mobile application to our clients. Our skilled team provide plan, strategy, design, implement, deploy, security for the development of mobile applications. We deliver high-quality standalone mobile application.`,
        },
        {
          color: 'blue darken-4',
          icon: 'mdi-cellphone-android',
          title: 'App Developement',
          subTitle: 'Think outside the box',
          description: `DIGAUT has highly skilled team of mobile app developers working together to deliver unique and attractive mobile application to our clients. Our skilled team provide plan, strategy, design, implement, deploy, security for the development of mobile applications. We deliver high-quality standalone mobile application.`,
        },
        {
          color: 'teal darken-2',
          icon: 'mdi-cellphone-android',
          title: 'App Developement',
          subTitle: 'Think outside the box',
          description: `DIGAUT has highly skilled team of mobile app developers working together to deliver unique and attractive mobile application to our clients. Our skilled team provide plan, strategy, design, implement, deploy, security for the development of mobile applications. We deliver high-quality standalone mobile application.`,
        },
        {
          color: 'green lighten-1',
          icon: 'mdi-cellphone-android',
          title: 'App Developement',
          subTitle: 'Think outside the box',
          description: `DIGAUT has highly skilled team of mobile app developers working together to deliver unique and attractive mobile application to our clients. Our skilled team provide plan, strategy, design, implement, deploy, security for the development of mobile applications. We deliver high-quality standalone mobile application.`,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
