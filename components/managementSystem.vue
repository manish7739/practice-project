<template>
  <div>
    <div class="display-2 text-center mt-10 ml-16 mb-6">Management System</div>
    <hr />
    <v-row class="mt-10">
      <v-col
        cols="10"
        sm="4"
        md="4"
        v-for="(project, i) in managementSystem"
        :key="i"
      >
        <v-card>
          <v-img :src="project.image" width="100%" height="40vh"></v-img>
          <v-btn width="100%" class="gray">{{ project.btnName }}</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'ManagementSystem',
  data() {
    return {
      managementSystem: [
        {
          image: '/dev.png',
          btnName: 'hello1',
        },
        {
          image: '/dev.png',
          btnName: 'hello1',
        },
        {
          image: '/dev.png',
          btnName: 'hello1',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
