import { useMutation } from '@tanstack/react-query';
import { keyStore } from '@/queries/keyStore.ts';
import { deleteDeviceToken } from '@/apis/user/deleteDeviceToken.ts';

export const useDeleteDeviceToken = () =>
  useMutation({
    mutationFn: deleteDeviceToken,
    mutationKey: keyStore.user.deleteDeviceToken.queryKey,
  });
