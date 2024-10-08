import axios from 'axios';
import { getCookie } from '@/utils/cookie/getCookie.ts';
import { refreshAccessToken } from '@/apis/auth/refreshAccessToken.ts';
import { setCookie } from '@/utils/cookie/setCookie.ts';

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

privateAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const refreshToken = getCookie('refresh-token');

    if (refreshToken === '') return Promise.reject(error);

    if (error.response?.status === 401) {
      // refresh token
      const response = await refreshAccessToken(getCookie('refresh-token'));
      const { refreshToken, refreshTokenExpiresIn, accessToken, expiresIn } = response.data;
      setCookie('access-token', accessToken, expiresIn);
      setCookie('refresh-token', refreshToken, refreshTokenExpiresIn);

      // retry

      return privateAxios(error.config);
    }

    return Promise.reject(error);
  },
);
