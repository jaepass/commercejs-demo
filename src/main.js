// Import Commerce.js as a dependency
import Commerce from '@chec/commerce.js';

import Vue from 'vue';
import App from './App.vue';

// Initialize store with public key, store key in variable
const commerce = new Commerce('pk_17054571618e73520760e522b00e08ee196503b14e95c', true);

Vue.config.productionTip = false;

// Create a Vue instance
// Pass our Commerce instance as a prop
new Vue({
  render: h => h(App,
    { props: { commerce } }),
}).$mount('#app');
