<template>
  <v-row>
    <v-col>
      <v-card>
        <v-card-title>
          <span class="mr-2"> {{ getItems.length }} </span>
          <span> {{ listTitle }} </span>
        </v-card-title>
        <v-card-text>
          <v-list>
            <template v-for="(item, i) in getItems">
              <v-list-item :key="`item-${i}`" @click="goToItem(i)">
                <v-list-item-avatar>
                  <v-img
                    :src="
                      showMotorcycle
                        ? require(`@/assets/images/${item.image}`)
                        : item.image
                    "
                  />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.manufacturer }}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ item.model }}
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon color="accent">
                    <v-icon>fa-eye</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
              <v-divider v-if="i < getItems.length - 1" :key="i" />
            </template>
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
    showMotorcycle: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    ...mapGetters("motorcycles", ["getMotorcycles"]),
    ...mapGetters("watches", ["getWatches"]),
    getItems() {
      return this.showMotorcycle ? this.getMotorcycles : this.getWatches;
    },
    listTitle() {
      return this.showMotorcycle ? "Motorcycles" : "Watches";
    },
  },
  methods: {
    goToItem(id) {
      this.$router.push({
        name: "motorcycles:show",
        params: { id: `${id}`, showMotorcycle: this.showMotorcycle },
      });
    },
  },
};
</script>