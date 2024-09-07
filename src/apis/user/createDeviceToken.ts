import { privateAxios } from '@/libs/baseAxios.ts';

export const createDeviceToken = (deviceToken: string) =>
  privateAxios.post('/device-token', { deviceToken });
