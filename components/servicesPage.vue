<template>
  <div>
    <div class="text-center mt-6 display-2">Our Services</div>
    <v-container>
      <v-row class="">
        <v-col cols="12" sm="12" md="12">
          <v-alert
            v-for="(serviceCardItem, index) in serviceCard"
            :key="index"
            border="left"
            colored-border
            elevation="2"
            :color="serviceCardItem.color"
          >
            <v-icon v-if="serviceCardItem.icon">
              {{ serviceCardItem.icon }}
            </v-icon>
            <span v-if="serviceCardItem.title" v-text="serviceCardItem.title">
            </span>
            <v-card-subtitle
              class="mt-n5 ml-2"
              v-if="serviceCardItem.subTitle"
              v-text="serviceCardItem.subTitle"
            >
            </v-card-subtitle>
            <v-card-text
              v-if="serviceCardItem.description"
              v-text="serviceCardItem.description"
            >
            </v-card-text>
          </v-alert>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'ServicesPage',
  props: {
    serviceCard: {
      type: Array,
    },
  },
}
</script>

<style lang="scss" scoped></style>
