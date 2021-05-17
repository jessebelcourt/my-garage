import watches from '@/assets/json/watches.json';

export default {
  namespaced: true,
  state: () => ({
    watches: watches.watches,
  }),
  getters: {
    getWatches: (state) => state.watches,
  },
  mutations: {
    UPDATE_WATCHES: (state, watches) => (state.watches = watches),
  },
  actions: {
    // Async data fetching for watches here (when not loading from json)
    // eslint-disable-next-line no-unused-vars
    async fetch({ commit }) {
      // try {
      //   const response = await axios.get('API_ENDPOINT');
      //   commit('UPDATE_WATCHES', response.data.watches);
      // } catch (error) {
      //   console.error('There was a problem fetching watch data: ', error);
      // }
    }
  }
};
