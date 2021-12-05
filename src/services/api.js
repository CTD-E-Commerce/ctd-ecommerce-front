import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ctd-ecommerce-back.herokuapp.com/'
});

export default api;