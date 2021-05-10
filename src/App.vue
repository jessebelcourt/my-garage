<template>
  <v-app class="">
    <v-app-bar app color="primary">
      <h2
        class="font-weight-light site-title"
        @click="$router.push({ name: 'index' })"
      >
        My Garage
      </h2>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  methods: {
    ...mapActions("motorcycles", ["fetch"]),
  },
  created() {
    this.fetch();
  },
};
</script>

<style lang="scss">
.site-title {
  cursor: pointer;
}
</style>
