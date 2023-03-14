import ProductService from '@/services/ProductService.js'

export const state = () => ({
  products: [],
  product: {}
})

export const mutations = {
  SET_PRODUCTS(state, products) {
    console.log('setdata: ', products)
    state.products = products
    console.log('after setdata: ', state.products)
  },
  SET_PRODUCT(state,product) {
    console.log("Inside set product",product)
    state.product = product
    console.log("After set product:",state.product)
  }
}

export const actions = {
  fetchProducts({ commit }) {
    console.log('inside fetchProducts')
    return ProductService.getProducts()
      .then((response) => {
        commit('SET_PRODUCTS', response.data)
      })
      .catch((error) => {
        console.log('An error happened', error)
      })
  },
  fetchProduct({commit},id){
    console.log("inside fetch product")
    return ProductService.getProduct(id).then((response) => {
        console.log("inside .then in fetchProduct");
        commit("SET_PRODUCT",response.data)

    }).catch((error) => {
        comsole.log("Could not fetch the required product",error)
    })
  }

  ///doesn't need catch error statement ?
}
