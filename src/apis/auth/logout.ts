import { privateAxios } from '@/libs/baseAxios.ts';
import { deleteDeviceToken } from '@/apis/user/deleteDeviceToken.ts';
import { getCookie } from '@/utils/cookie/getCookie.ts';

const requestLogout = () =>
  privateAxios.post('/logout', {
    refreshToken: getCookie('refresh-token'),
  });

export const logout = () => Promise.all([requestLogout(), deleteDeviceToken()]);
