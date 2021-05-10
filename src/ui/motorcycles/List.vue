<template>
  <v-row>
    <v-col>
      <v-card>
        <v-card-title>
          <span class="mr-2"> {{ getMotorcycles.length }} </span>
          <span> Motorcycles </span>
        </v-card-title>
        <v-card-text>
          <v-list>
            <template v-for="(motorcycle, i) in getMotorcycles">
              <v-list-item :key="`motorcycle-${i}`" @click="goToMotorcycle(i)">
                <v-list-item-avatar>
                  <v-img
                    :src="require(`@/assets/images/${motorcycle.image}`)"
                  />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ motorcycle.manufacturer }}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ motorcycle.model }}
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon color="accent">
                    <v-icon>fa-eye</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
              <v-divider v-if="i < getMotorcycles.length - 1" :key="i" />
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
  computed: {
    ...mapGetters("motorcycles", ["getMotorcycles"]),
  },
  methods: {
    goToMotorcycle(id) {
      this.$router.push({
        name: "motorcycles:show",
        params: { id: `${id}` },
      });
    },
  },
};
</script>