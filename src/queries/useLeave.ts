import { useMutation } from '@tanstack/react-query';
import { keyStore } from '@/queries/keyStore.ts';
import { leave } from '@/apis/auth/leave';

export const useLeave = () =>
  useMutation({
    mutationKey: keyStore.auth.leave.queryKey,
    mutationFn: leave,
  });
