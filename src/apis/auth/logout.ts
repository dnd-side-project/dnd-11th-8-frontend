import { privateAxios } from '@/libs/baseAxios.ts';
import { deleteDeviceToken } from '@/apis/user/deleteDeviceToken.ts';

const requestLogout = () => privateAxios.post('/logout');

export const logout = () => Promise.all([requestLogout(), deleteDeviceToken()]);
