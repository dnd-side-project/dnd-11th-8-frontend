import { privateAxios } from '@/libs/baseAxios.ts';
import { deleteDeviceToken } from '@/apis/user/deleteDeviceToken.ts';

const requestDeleteUser = () => privateAxios.delete('/users/withdraw');

export const deleteUser = async () => {
  await deleteDeviceToken();
  return requestDeleteUser();
};
