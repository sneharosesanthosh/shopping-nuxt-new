export const state = () => ({
  cartItems: [],
  cartItem: {},
})

export const mutations = {
  GET_CART(state, cartItems) {
    state.cartItems = cartItems
  },
  SET_CART(state, product) {
    if (
      product.quantity == 1 &&
      !state.cartItems.find((item) => item.id === product.id)
    ) {
        console.log('pushing..')
      state.cartItems.push(product)
    }
    // insert new product to the cart array.
    else {
        console.log('replacing...')
      const index = state.cartItems.findIndex(p => p.id === product.id)
      state.cartItems.splice(index, 1, product)
    }
  },
  DELETE_CART_ITEM(state, filtCart) {
    console.log('Initial Cart items in vuex: ', state.cartItems)
    state.cartItems = filtCart
    console.log('After deletion, cart:', state.cartItems)
  },
}
export const actions = {
  fetchCartItems({ commit, state }) {
    commit('GET_CART', state.cartItems)
  },
  setCartItem({ commit, state }, product) {
    console.log('prodcut to be inserted to cart :', product)
    console.log('cart: ', state.cartItems)
    let cartProduct = state.cartItems.find((item) => item.id === product.id)
    console.log(cartProduct);
    if (!cartProduct) {
        console.log('no');
      commit('SET_CART', { ...product, quantity: 1 })
    } else {
        console.log('yes');
      commit('SET_CART', {
        ...cartProduct,
        quantity: cartProduct.quantity + 1,
      })
    }
    console.log('store: cartItems = ', state.cartItems)
  },
  deleteCartItem({ commit, state }, id) {
    console.log('Before cart deletion: ', state.cartItems)
    let filtCart = [...state.cartItems].filter((item) => item.id !== id)
    console.log('filteredCart:', filtCart)
    commit('DELETE_CART_ITEM', filtCart)
    console.log('after deletion: ', state.cartItems)
  },
  //   updateProductQuantity({ commit, state }, product) {
  //     console.log("before qnty update :", state.cartItems);
  //     commit("SET_CART", product);
  //     console.log("After qnty update :", state.cartItems);
  //   },
  decrementProductQuantity({ commit, state }, product) {
    console.log('INSIDE DECREMENT')
    console.log('before decrement:', state.cartItems)
    if (product.quantity === 1) {
      //to remove from cart if current_qnty - 1 == 0
      let filtCart = state.cartItems.filter((item) => item.id !== product.id) // new cart items list with removed item.
      commit('DELETE_CART_ITEM', filtCart) //set cartItems with new cart list
    } else {
      commit('SET_CART', { ...product, quantity: (product.quantity - 1) })
      console.log('After decrement:', state.cartItems)
    }
  },
}

export const getters = {
  getCartItems(stateobj) {
    return stateobj.cartItems
  },
  getCartItem(state) {
    return state.product
  },
  getItemById: (state) => (id) => {
    return state.cartItems.find((item) => item.id === id)
  },

  filteredCart: (state) => (id) => {
    return state.cartItems.filter((item) => item.id !== id)
  },

  //   filteredCart({ state }, id) {
  //     return state.cartItems.filter((item) => item.id !== id);
  //   },
}
