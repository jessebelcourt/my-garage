<template>
  <v-row>
    <v-col>
      <v-card>
        <v-img
          :src="
            showMotorcycle
              ? require(`@/assets/images/${item.image}`)
              : item.image
          "
        />
        <v-card-title>
          {{ item.manufacturer }}
        </v-card-title>
        <v-card-subtitle>
          {{ item.model }}
        </v-card-subtitle>
        <v-divider />
        <v-card-text>
          <h3>Description</h3>
          <p>{{ item.description }}</p>
          <v-list>
            <v-list-item v-if="item.power">
              <v-list-item-content>
                <v-list-item-title>Power</v-list-item-title>
                <v-list-item-subtitle>
                  {{ item.power }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item v-if="item.displacement">
              <v-list-item-content>
                <v-list-item-title>Displacement</v-list-item-title>
                <v-list-item-subtitle>
                  {{ item.displacement }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Color</v-list-item-title>
                <v-list-item-subtitle>
                  {{ item.color }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item v-if="item.year">
              <v-list-item-content>
                <v-list-item-title>Year</v-list-item-title>
                <v-list-item-subtitle>
                  {{ item.year }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    showMotorcycle: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    ...mapGetters("motorcycles", ["getMotorcycles"]),
    ...mapGetters("watches", ["getWatches"]),
    // This would be either loaded async or a lookup from all inclusive list
    item() {
      return this.showMotorcycle
        ? this.getMotorcycles[this.id]
        : this.getWatches[this.id];
    },
  },
};
</script>