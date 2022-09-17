import axios from "axios";

const Products = axios.get(import.meta.env.VITE_URL, {
    params: {api_key: import.meta.env.VITE_KEY},
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_RAPID_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_RAPID_HOST
    }
});

export default Products;