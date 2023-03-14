import ProductService from '@/services/ProductService.js'

export const state = () => ({
  products: [],
})

export const mutations = {
  SET_PRODUCTS({ state }, products) {
    state.products = products
  },
}

export const actions = {
  async fetchProducts({ commit }) {
    try {
      const { data } = await ProductService.getProducts()
      commit('SET_PRODUCTS', data)
    } catch (e) {
      console.log("Error occured while fetching products:",e);
    }
  }, ///doesn't need catch error statement ?
}
