const {default:axios} = require('axios')
import axiosClient from '@/app/_Utils/axiosClient'
const getLatestProducts = ()=>axiosClient.get('/products?populate=*')
const getProductById=(id)=>axiosClient.get(`/products/${id}?populate=*`)
const getProductsByCategory=(category)=>axiosClient.get(`/products?filters[category][$eq]=${category}&populate=*`)

export default {
    getLatestProducts,
    getProductById,
    getProductsByCategory
}