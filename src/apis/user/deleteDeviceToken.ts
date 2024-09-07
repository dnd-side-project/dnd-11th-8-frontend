import { privateAxios } from '@/libs/baseAxios.ts';

export const deleteDeviceToken = () => privateAxios.delete('/device-token');
