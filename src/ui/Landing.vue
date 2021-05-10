<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-text>
            <v-carousel :cycle="true">
              <v-carousel-item
                v-for="(motorcycle, i) in getMotorcycles"
                :key="`motorcycle-${i}`"
              >
                <v-sheet height="100%" tile>
                  <v-row class="fill-height" align="center" justify="center">
                    <v-img
                      class="d-relative"
                      cover
                      :src="require(`@/assets/images/${motorcycle.image}`)"
                    >
                    </v-img>
                  </v-row>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-btn
        outlined
        class="mt-8"
        x-large
        color="accent"
        @click="$router.push({ name: 'motorcycles:list' })"
      >
        <span class="mr-3">View All Bikes</span>
        <v-icon>fa-motorcycle</v-icon>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("motorcycles", ["getMotorcycles"]),
  },
};
</script>