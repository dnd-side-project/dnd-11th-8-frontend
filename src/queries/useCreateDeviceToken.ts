import { useMutation } from '@tanstack/react-query';
import { keyStore } from '@/queries/keyStore.ts';
import { createDeviceToken } from '@/apis/user/createDeviceToken.ts';

export const useCreateDeviceToken = () =>
  useMutation({
    mutationKey: keyStore.user.createDeviceToken.queryKey,
    mutationFn: createDeviceToken,
  });
