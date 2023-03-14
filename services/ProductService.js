import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: {
    Accept: 'application/json',
    ContentType: 'application/json',
  },
  withCredentials: false,
})

export default {
  getProducts() {
    console.log('inside getProducts')
    return apiClient.get('/products')
  },
  getProduct(id) {
    console.log("Inside getProduct")
    return apiClient.get('/products/'+id)
  }
}
