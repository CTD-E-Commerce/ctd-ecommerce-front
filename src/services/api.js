import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ctd-ecommerce-api.herokuapp.com/'
  // baseURL: 'http://turmadoisgrupodois-env.eba-e8scz79c.us-east-1.elasticbeanstalk.com/'
});
export default api;