import Vue from 'vue';
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa',
  },
  theme: {
    themes: {
      light: {
        primary: "#5f8ee4",
        secondary: "#19191a",
        accent: "#e4655f",
      },
    },
  },
});
