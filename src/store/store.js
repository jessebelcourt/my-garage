import Vue from 'vue'
import Vuex from 'vuex'
import motorcycles from '@/store/motorcycles'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    motorcycles
  },
})