import { privateAxios } from '@/libs/baseAxios.ts';

const requestLeave = () => privateAxios.post('/users/leave');

const requestRemoveDeviceToken = () => privateAxios.delete('/device-token');

export const leave = () => Promise.all([requestLeave(), requestRemoveDeviceToken()]);
