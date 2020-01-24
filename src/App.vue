<template>
  <div id="app">
    <!-- Product catalogue -->
    <div v-for="product in products" :key="product.id">
      <Product  :product="product" />
    </div>
    <!-- END Product catalogue -->
  </div><!-- END App -->
</template>

<script>
import Product from '@/components/Product.vue';

export default {
  name: 'app',
  components: {
    Product,
  },
  // Pass commerce as a prop
  props: {
    commerce: {
      required: true,
      type: Object,
    },
  },
  // Return our product data
  data() {
    return {
      products: [],
    };
  },

  // When Vue app is created, run these functions to fetch data from API
  created() {
    // Make a request to list products
    this.commerce.products.list().then((resp) => {
      // Respond with products data upon a successful request
      this.products = resp.data;
    })
    // Handle Error
      .catch((error) => {
        console.log(error);
      });
  },
};

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
