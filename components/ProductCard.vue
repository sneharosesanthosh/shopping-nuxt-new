<template>
  <nuxt-link :to="{}">
    <div class="col mb-5">
      <div class="card h-100">
        <!-- Sale badge-->
        <div
          class="badge bg-dark text-white position-absolute"
          style="top: 0.5rem; right: 0.5rem"
        >
          Sale
        </div>
        <!-- Product image-->
        <img class="card-img-top" alt="..." />
        <!-- Product details-->
        <div class="card-body p-4">
          <div class="text-center">
            <!-- Product name-->
            <h5 class="fw-bolder">{{ product.title }}</h5>
            <!-- Product price-->
            <!-- <span class="text-muted text-decoration-line-through">{$50.00}</span> -->
            {{ product.price }}
          </div>
        </div>
        <!-- Product actions-->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div class="text-center">
            <a class="btn btn-outline-dark mt-auto" href="#" @click="addToCart()">Add to cart</a>
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ['product'],
  methods: {
    addToCart() {
      console.log("Add to cart button clicked");
    }
  }
}
</script>
