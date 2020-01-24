// Import Commerce.js as a dependency
import Commerce from '@chec/commerce.js';

import Vue from 'vue';
import App from './App.vue';

// Initialize store with public key, store key in variable
const commerce = new Commerce('pk_17695092cf047ebda22cd36e60e0acbe5021825e45cb7', true);

Vue.config.productionTip = false;

// Create a Vue instance
// Pass our Commerce instance as a prop
new Vue({
  render: h => h(App,
    { props: { commerce } }),
}).$mount('#app');
