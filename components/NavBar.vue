<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container px-4 px-lg-5">
        <!-- can we use <a> and give route path to it -->
        <!-- <a class="navbar-brand" href="#!">Start Bootstrap</a> -->
        <router-link :to="{ name: 'HomeView' }" class="nav-link"
          >Shopping Site</router-link
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li class="nav-item">
              <router-link :to="{ name: 'HomeView' }" class="nav-link active"
                >Home</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'AboutView' }" class="nav-link"
                >About</router-link
              >
            </li>
  
            <!-- Drop down -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >Shop</a
              >
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#!">All Products</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#!">Popular Items</a></li>
                <li><a class="dropdown-item" href="#!">New Arrivals</a></li>
              </ul>
            </li>
          </ul>
          <form class="d-flex">
            <router-link
              :to="{ name: 'CartView' }"
              class="nav-item nav-link btn btn-outline-dark"
              type="submit"
            >
              <i class="bi-cart-fill me-1"></i>
              Cart
              <span class="badge bg-dark text-white ms-1 rounded-pill">{{
                
              }}</span>
            </router-link>
          </form>
        </div>
      </div>
    </nav>
    <!--div>
        <div class="brand container-fluid navbar-nav">   
            <router-link :to="{ name: 'HomeView' }" class="mb-0 h1 navbar-brand">Start Bootstrap</router-link>
            <router-link :to="{ name: 'HomeView' }" class="nav-item nav-link active">Home</router-link> |
            <router-link :to="{ name: 'AboutView' }" class="nav-item nav-link">About</router-link> |
            <router-link :to="{ name: 'ShopView' }" class="nav-item nav-link">Shop</router-link> |
            <router-link :to="{ name: 'CartView' }" class="nav-item nav-link">Cart</router-link>
        </div>
      </div-->
  </template>
  
  <script></script>
  
  <style scoped>
  router-link {
    display: inline;
  }
  </style>
  