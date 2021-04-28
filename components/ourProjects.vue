<template>
  <div class="deep-purple lighten-5 py-6" height="60vh">
    <h1 class="text-center display-2 mt-9"><u>OUR ROJECTS</u></h1>
    <v-row class="mt-10">
      <v-col
        cols="12"
        sm="3"
        md="3"
        v-for="(project, i) in ourProject"
        :key="i"
      >
        <v-card class="ml-5">
          <v-img :src="project.image" width="100%" height="55vh"></v-img>
          <v-btn class="gray" width="100%">{{ project.btnName }} </v-btn>
        </v-card>
      </v-col>
    </v-row>
    <div class="text-center mt-10">
      <v-btn color="indigo lighten-1" x-largen outlined to="/project-page">
        MORE PROJECTS <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'OurProjects',
  data() {
    return {
      ourProject: [
        {
          image: '/dev.png',
          btnName: 'Pestokill',
        },
        {
          image: '/dev.png',
          btnName: 'Pestokill',
        },
        {
          image: '/dev.png',
          btnName: 'Pestokill',
        },
        {
          image: '/dev.png',
          btnName: 'Pestokill',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
