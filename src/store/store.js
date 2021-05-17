import Vue from 'vue'
import Vuex from 'vuex'
import motorcycles from '@/store/motorcycles'
import watches from '@/store/watches'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    motorcycles,
    watches,
  },
})