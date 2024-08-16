import axios from 'axios';

const BASE_URL = 'http://localhost:1337/admin/plugins/content-type-builder/content-types/api::cart.cart'

// Create an Axios instance with the base URL
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Add other headers if needed (e.g., Authorization)
  },
});

// Function to add an item to the cart
const addToCart = async (data) => {
  try {
    const response = await apiClient.post('/cart', data); // Replace '/cart' with your Strapi endpoint
    return response.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error; // Optionally handle or rethrow the error
  }
};

export default {
  addToCart,
};
