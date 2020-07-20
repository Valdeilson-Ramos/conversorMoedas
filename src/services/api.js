import axios from 'axios';

const api = axios.create({
  baseURL: 'https://free.currencyconverterapi.com/api/v5/convert'
});

export default api;