<template>
  <div v-if="getCartItems.length">
    <div
      class="card"
      style="width: 18rem"
      v-for="item in getCartItems"
      :key="item.id"
    >
      <img class="card-img-top product-image" :src="item.image" alt="..." />
      <div class="card-body">
        <!-- <h5 class="card-title">{{ item.id }}</h5> -->
        <p class="card-text">
          {{ item.description }}
        </p>
        <a href="#" class="btn btn-primary" @click.prevent="deleteCartItem(item.id)"
          >delete</a
        >
        <a href="#" class="btn btn-primary" @click.prevent="setCartItem(item)">+</a>
        <a
          href="#"
          class="btn btn-primary"
          @click.prevent="decrementProductQuantity(item)"
          >-</a
        >
        <h3>{{ item.quantity }}</h3>
      </div>
    </div>
  </div>
  <div v-else>
    Your Cart is empty.
    <nuxt-link :to="{ name: 'index' }">Explore Products</nuxt-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  async fetch({ store }) {
    await store.dispatch('cart/fetchCartItems')
    //   console.log("CART ITEMS: ", store.state.cartItems);
  },
  methods: {
    ...mapActions('cart', [
      'fetchCartItems',
      'deleteCartItem',
      'setCartItem',
      'decrementProductQuantity',
    ]),
  },
  computed: {
    ...mapGetters('cart', ['getCartItems']),
  },
}
</script>

<style scoped>
.product-image {
  width: 300px;
  margin: 0 2em;
  padding: 2em;
}
</style>
