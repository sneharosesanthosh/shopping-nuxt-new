<template>
  <section class="py-5">
    <div class="container px-4 px-lg-5 mt-5">
      <div
        class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
      >
        <ProductCard
          v-for="product in product.products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from '~/components/ProductCard.vue'
import { mapState } from 'vuex'
export default {
  name: 'IndexPage',
  head() {
    return {
      title: 'Home',
      meta: [
        {
          hid: 'Description',
          name: 'Description',
          content: 'Explore your favorite products',
        },
      ],
    }
  },
  async fetch({ store, error }) {
    try {
      console.log('inside fetch function')
      await store.dispatch('product/fetchProducts')
    } catch (e) {
      error({
        statusCode: 503,
        message:
          'Unable to fetch events data at this time.Please try again later.',
      })
    }
  },
  computed: {
    ...mapState(['product']),
  },
  components: {
    ProductCard,
  },
}
</script>
