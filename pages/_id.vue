<template>
  <div>
    <div>Product details View</div>
    <!-- <h1>Product id is {{ prod_id }}</h1> -->
    <h2>Product: {{ product.title }}</h2>
    <h3>Category: {{ product.category }}</h3>
    <img :src="product.image" alt="" srcset="" />
    <button>Add To Cart</button>

    <nuxt-link :to="{ name: 'cart' }" @click="fetchCartItems()"
      >Go to Cart</nuxt-link
    >
<!-- 
    <input
      type="number"
      v-show="false"
      id="quantity"
      name="quantity"
      :value="cart.quantity"
    /> -->
  </div>
  
</template>

<script>
import { mapState } from 'vuex'

export default {
  head() {
    return {
      title: 'product:#' + this.product.id,
      meta: [
        {
          hid: 'Description',
          name: 'Description',
          content: 'this is individual product details',
        },
      ],
    }
  },
  async fetch({ store, error, params }) {
    try {
        console.log("inside async fetch")
      await store.dispatch('product/fetchProduct', params.id)
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Could not fetch product',
      })
    }
  },
  computed: mapState({
    product: (state) => state.product.product,
  }),
}
</script>
