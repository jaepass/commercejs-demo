<template>
    <div class="card my-5 border-0" style="height:41rem;">
        <div class="card-body">
            <img class="card-img-top"
                :src="product.media.source"
                :alt="product.name"/>
            <h4 class="title text-center card-title display-5 pt-4">{{product.name}}</h4>
            <p class="description text-center card-text display-5" v-html="product.description"></p>
            <p class="text-center text-muted card-subtitle display-5 price">
              {{product.price.formatted_with_symbol}}
            </p>
        </div>
    </div><!-- End of card content -->
</template>

<script>
export default {
  name: 'product',
  props: ['product'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
