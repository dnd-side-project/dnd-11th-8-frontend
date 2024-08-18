import { useMutation } from '@tanstack/react-query';
import { signIn } from '@/apis/auth/signIn.ts';
import { keyStore } from '@/queries/keyStore.ts';

export const useSignIn = () =>
  useMutation({
    mutationKey: keyStore.auth.signIn.queryKey,
    mutationFn: signIn,
  });
