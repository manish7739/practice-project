<template>
  <div>
    <h1 class="text-center mt-10 display-2"><u>About Us</u></h1>
    <v-card class="mx-10" max-width="100%">
      <div class="purple lighten-1">
        <h1 class="ml-7 mt-9">About Us</h1>
      </div>

      <v-card-text class="text--primary subtitle-1">
        DIGAUT is an emerging IT company specialized in Software development,
        Business Process Services, IT Solutions, IT consultancy Services,
        Digital Marketing and Project Management support. We operate to create
        e-solutions for Information Technology and business outsourcing.
        <p></p>
        DIGAUT is a certified and well-established IT company having
        specialization in creating Static and Dynamic websites, web apps, mobile
        application, graphic designing and animations. We provide complete web
        solutions, application design and development.
      </v-card-text>
    </v-card>

    <!-- timeline -->
    <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item
        v-for="(item, i) in timelineFirst"
        :key="i"
        :color="item.color"
        :icon="item.icon"
        fill-dot
      >
        <v-card :color="item.color" dark class="mx-16">
          <v-card-title class="title" v-text="item.title"> </v-card-title>
          <v-card-text
            class="white subtitle-1 text--primary"
            v-text="item.description"
          >
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  name: 'Timeline',
  data: () => ({
    timelineFirst: [
      {
        color: 'red lighten-2',
        icon: 'mdi-star',
        title: 'What We Believe',
        description:
          'We believe great ideas require hard work, continuous efforts and determination, We believe that the minor details make the major differences, We believe in the improvement skills of team. We believe in building great software, We treat everyone with respect.',
      },
      {
        color: 'purple darken-1',
        icon: 'mdi-star',
        title: 'Our Core Values',
        description:
          'Our core values are what makes DIGAUT different from others. Our core values empower our team to be master in their technology domains to build flawless IT products.',
      },
      {
        color: 'green lighten-1',
        icon: 'mdi-star',
        title: 'Accountability',
        description:
          'We are accountable to meet our commitment made to our clients.',
      },
      {
        color: 'indigo',
        icon: 'mdi-star',
        title: 'Quality',
        description:
          'We work to provide extraordinary products and services to our customers. Our product and services add value to our customer`s life.',
      },
      {
        color: 'indigo',
        icon: 'mdi-star',
        title: 'Team Work',
        description:
          ' We work in a team to make our client demands fulfilled that help our company win.',
      },
      {
        color: 'indigo',
        icon: 'mdi-star',
        title: 'Continuous Learning',
        description:
          'We emphasize on continuous learning to keep ourselves up to date in technologies',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped></style>
