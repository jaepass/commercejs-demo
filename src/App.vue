<template>
  <div>

    <div class="hero-wrapper">
      <img src="/logo.svg" alt="Logo">
    </div>
    <!-- Products catalogue -->
    <div class="container mx-auto px-4">
      <div class="flex mb-4">
        <div class="row">
          <!-- Loop through products and output -->
          <!-- :key is for Vue to keep track of items -->
          <div class="col-sm-4" v-for="product in products" :key="product.id">
            <!-- Bind product to cart -->
            <product  :product="product"/>
          </div><!-- END Product Catalogue -->
        </div>
      </div>
    </div><!-- END of App Container -->
  </div><!-- END of Storefront -->
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
        // eslint-disable-next-line
        console.log(error);
      });
  },
};

</script>

<style>
body {
  font-family: 'Amiko', sans-serif;
  background-color: #E8E2D7;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}

.hero-wrapper{
  background-image: url("/hero-img.png");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 100vh;
}

.hero-wrapper img{
  padding: 30px 0 0 30px;
  cursor: pointer;
}

.hero-text{
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}
</style>
