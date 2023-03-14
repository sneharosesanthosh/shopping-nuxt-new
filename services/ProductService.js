import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: false,
})

export default {
  getProducts() {
    console.log('inside getProducts')
    return apiClient.get('/products')
  },
}
