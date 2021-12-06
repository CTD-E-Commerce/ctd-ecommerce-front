import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ctd-ecommerce-api.herokuapp.com/'
});

export default api;