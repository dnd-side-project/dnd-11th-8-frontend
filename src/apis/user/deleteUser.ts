import { privateAxios } from '@/libs/baseAxios.ts';
import { deleteDeviceToken } from '@/apis/user/deleteDeviceToken.ts';

const requestDeleteUser = () => privateAxios.post('/users/withdraw');

export const deleteUser = async () => {
  await deleteDeviceToken();
  return requestDeleteUser();
};
