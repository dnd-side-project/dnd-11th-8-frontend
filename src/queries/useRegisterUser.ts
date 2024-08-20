import { useMutation } from '@tanstack/react-query';
import { keyStore } from '@/queries/keyStore.ts';
import { registerUser } from '@/apis/user/registerUser.ts';

export const useRegisterUser = () => {
  return useMutation({
    mutationKey: keyStore.user.register.queryKey,
    mutationFn: registerUser,
  });
};
