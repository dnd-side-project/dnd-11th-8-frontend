import { useMutation } from '@tanstack/react-query';
import { keyStore } from '@/queries/keyStore.ts';
import { refreshAccessToken } from '@/apis/auth/refreshAccessToken.ts';

export const useRefreshAccessToken = () =>
  useMutation({
    mutationKey: keyStore.auth.refreshAccessToken.queryKey,
    mutationFn: refreshAccessToken,
  });
