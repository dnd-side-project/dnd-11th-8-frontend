import { privateAxios } from '@/libs/baseAxios.ts';

export const deleteDeviceToken = () => privateAxios.post('/device-token/invalid');
