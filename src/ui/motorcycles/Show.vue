<template>
  <v-row>
    <v-col>
      <v-card>
        <v-img :src="require(`@/assets/images/${motorcycle.image}`)" />
        <v-card-title>
          {{ motorcycle.manufacturer }}
        </v-card-title>
        <v-card-subtitle>
          {{ motorcycle.model }}
        </v-card-subtitle>
        <v-divider />
        <v-card-text>
          <h3>Description</h3>
          <p>{{ motorcycle.description }}</p>
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Power</v-list-item-title>
                <v-list-item-subtitle>
                  {{ motorcycle.power }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Displacement</v-list-item-title>
                <v-list-item-subtitle>
                  {{ motorcycle.displacement }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Color</v-list-item-title>
                <v-list-item-subtitle>
                  {{ motorcycle.color }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Year</v-list-item-title>
                <v-list-item-subtitle>
                  {{ motorcycle.year }}
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
  },
  computed: {
    ...mapGetters("motorcycles", ["getMotorcycles"]),
    // This would be either loaded async or a lookup from all inclusive list
    motorcycle() {
      return this.getMotorcycles[this.id];
    },
  },
};
</script>