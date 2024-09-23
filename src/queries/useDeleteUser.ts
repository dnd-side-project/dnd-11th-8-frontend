import { useMutation } from '@tanstack/react-query';
import { keyStore } from '@/queries/keyStore.ts';
import { deleteUser } from '@/apis/user/deleteUser.ts';

export const useDeleteUser = () =>
  useMutation({
    mutationKey: keyStore.user.deleteUser.queryKey,
    mutationFn: deleteUser,
  });
