<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-text>
            <v-carousel :cycle="true">
              <v-carousel-item
                v-for="(item, i) in listItems"
                :key="`item-${i}`"
              >
                <v-sheet height="100%" tile>
                  <v-row class="fill-height" align="center" justify="center">
                    <v-img
                      class="d-relative"
                      cover
                      :src="
                        showMotorcycles
                          ? require(`@/assets/images/${item.image}`)
                          : item.image
                      "
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
        @click="
          $router.push({
            name: 'motorcycles:list',
            params: { showMotorcycle: showMotorcycles },
          })
        "
      >
        <span class="mr-3">{{ viewAllItemsBtnText }}</span>
        <v-icon v-if="showMotorcycles">fa-motorcycle</v-icon>
        <v-icon v-else>fa-clock</v-icon>
      </v-btn>
    </v-row>
    <v-row justify="center">
      <v-switch v-model="showMotorcycles" />
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    showMotorcycles: true,
  }),
  computed: {
    ...mapGetters("motorcycles", ["getMotorcycles"]),
    ...mapGetters("watches", ["getWatches"]),
    listItems() {
      return this.showMotorcycles ? this.getMotorcycles : this.getWatches;
    },
    viewAllItemsBtnText() {
      return this.showMotorcycles ? "View All Bikes" : "View All Watches";
    },
  },
};
</script>