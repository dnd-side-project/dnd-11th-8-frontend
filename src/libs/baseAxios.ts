import axios from 'axios';
import { getCookie } from '@/utils/cookie/getCookie.ts';

export const baseAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const privateAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

privateAxios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${getCookie('access-token')}`;
  return config;
});
