import axios from 'axios';

const api = axios.create({
  baseURL: 'http://18.231.107.52:8080/'
});

export default api;