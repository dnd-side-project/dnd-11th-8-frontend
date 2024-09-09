import { privateAxios } from '@/libs/baseAxios.ts';
import { deleteDeviceToken } from '@/apis/user/deleteDeviceToken.ts';

const requestLeave = () => privateAxios.post('/users/leave');

export const leave = () => Promise.all([requestLeave(), deleteDeviceToken()]);
