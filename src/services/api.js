import axios from 'axios';

const api = axios.create({
  baseURL: 'http://54.233.92.164:8080/'
});

export default api;