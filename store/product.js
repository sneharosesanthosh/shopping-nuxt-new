import ProductService from '@/services/ProductService.js'

export const state = () => ({
  productsy: [],
})

export const mutations = {
  SET_PRODUCTS({ state }, products) {
    state.products = products
  },
}

export const actions = {
   fetchProducts({ commit }) {
    console.log("inside fetchProducts");
      return ProductService.getProducts().then((response)=>{
        commit('SET_PRODUCTS', response.data)
      }).catch((error)=>{
        console.log("An error happened",error);
      })
      
    } 
      
    
   ///doesn't need catch error statement ?
}
