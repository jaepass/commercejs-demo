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
            <button @click="$emit('add-to-cart', product)"
                    class="btn"
            >
              {{'Quick Add'}}
            </button>
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
<style lang="scss">
body{
  font-family: $font-primary;
}

.card-body {
  background-color: $bg-color;

  img{
    border: 2px solid $text-primary;
    display: block;
    margin: 0 auto;
  }

  h4{
    color: $text-primary;
    font-size: 17px;
    font-weight: 800;
    letter-spacing: 2.25px;
    line-height: 32px;
  }

  .btn {
    border: 1px solid $color-accent;
    border-radius: 0;
    background: transparent;
    color: $color-accent;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: $color-accent;
      color: white;
    }
  }
}

</style>
