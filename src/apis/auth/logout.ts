import { privateAxios } from '@/libs/baseAxios.ts';

const requestLogout = () => privateAxios.post('/logout');

const requestRemoveDeviceToken = () => privateAxios.delete('/device-token');

export const logout = () => Promise.all([requestLogout(), requestRemoveDeviceToken()]);
