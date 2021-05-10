import motorcycles from '@/assets/json/motorcycles.json';

export default {
  namespaced: true,
  state: () => ({
    motorcycles: motorcycles.bikes,
  }),
  getters: {
    getMotorcycles: (state) => state.motorcycles,
  },
  mutations: {
    UPDATE_MOTORCYCLES: (state, motorcycles) => (state.motorcycles = motorcycles),
  },
  actions: {
    // Async data fetching for motorcycles here (when not loading from json)
    // eslint-disable-next-line no-unused-vars
    async fetch({ commit }) {
      // try {
      //   const response = await axios.get('API_ENDPOINT');
      //   commit('UPDATE_MOTORCYCLES', response.data.bikes);
      // } catch (error) {
      //   console.error('There was a problem fetching motorcycle data: ', error);
      // }
    }
  }
};
