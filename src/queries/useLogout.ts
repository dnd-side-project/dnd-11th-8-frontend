import { useMutation } from '@tanstack/react-query';
import { keyStore } from '@/queries/keyStore.ts';
import { logout } from '@/apis/auth/logout.ts';

export const useLogout = () =>
  useMutation({
    mutationKey: keyStore.auth.logout.queryKey,
    mutationFn: logout,
  });
