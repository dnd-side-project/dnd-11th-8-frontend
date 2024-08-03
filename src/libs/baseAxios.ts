import axios from 'axios';

const baseAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default baseAxios;
