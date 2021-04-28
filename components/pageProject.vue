<template>
  <div class="">
    <div class="text-center mt-10 mb-5 display-2">Basic Project</div>
    <hr />

    <v-row class="mt-10">
      <v-col
        cols="12"
        sm="4"
        md="4"
        v-for="(project, i) in pageProject"
        :key="i"
      >
        <v-card class="ml-5">
          <v-img
            :src="project.image"
            width="100%"
            height="40vh"
            outlined
          ></v-img>
          <v-btn class="gray" width="100%">{{ project.btnName }} </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'PageProject',
  data() {
    return {
      pageProject: [
        {
          image: '/dev.png',
          btnName: 'hello1',
        },
        {
          image: '/dev.png',
          btnName: 'hello2',
        },
        {
          image: '/dev.png',
          btnName: 'hello3',
        },
        {
          image: '/dev.png',
          btnName: 'hello4',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
