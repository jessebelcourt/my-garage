<template>
  <v-container>
    <v-row>
      <v-col>
        <v-breadcrumbs :items="breadcrumbs" class="pl-0" />
      </v-col>
    </v-row>
    <router-view></router-view>
  </v-container>
</template>

<script>
export default {
  computed: {
    breadcrumbs() {
      const breadcrumbs = [
        {
          to: { name: "motorcycles:list" },
          text: "All Motorcycles",
          exact: true,
        },
      ];
      if (this.$route.name === "motorcycles:show") {
        breadcrumbs.push({
          to: { name: "motorcycles:show" },
          text: "View",
        });
      }
      return breadcrumbs;
    },
  },
};
</script>