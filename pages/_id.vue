<template>
  <div>
    <div>Product details View</div>
    <h2>Product: {{ product.product.title }}</h2>
    <h3>Category: {{ product.product.category }}</h3>
    <img :src="product.product.image" alt="" srcset="" />
    <button
      v-if="!productExistInCart"
      @click.prevent="setCartItem(product.product)"
    >
      Add To Cart
    </button>

    <nuxt-link :to="{ name: 'cart' }" v-else>Go to Cart</nuxt-link>

    <input
      type="number"
      v-show="false"
      id="quantity"
      name="quantity"
      :value="cart.quantity"
    />
  </div>
  <!-- <h3>Product title: {{ product.title }}</h3> -->
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  // props: ["id"],
  async fetch({ store, params }) {
    try {
      await store.dispatch('product/fetchProduct', params.id)
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch cart items',
      })
    }
  },
  methods: {
    ...mapActions({
      fetchProduct: 'product/fetchProduct',
      //   fetchCartItems: 'cart/fetchCartItems',
      setCartItem: 'cart/setCartItem',
    }),

    // addToCart() {
    //   this.setCartItem(this.product.product);

    //   console.log("product", this.product.product);
    // },
  },
  computed: {
    ...mapState(['product', 'cart']),
    ...mapGetters('cart', ['getCartItems','getItemById']),
    ...mapGetters('product', ['getProduct']),
    productExistInCart (state) {
     return this.getItemById(this.product.product.id)
    }
  },
}
</script>

<style></style>
