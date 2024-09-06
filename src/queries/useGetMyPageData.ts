import { useSuspenseQuery } from '@tanstack/react-query';
import { keyStore } from '@/queries/keyStore.ts';
import { getMyPageData } from '@/apis/user/getMyPageData.ts';

export const useGetMyPageData = () =>
  useSuspenseQuery({
    queryKey: keyStore.user.getMyPageData.queryKey,
    queryFn: getMyPageData,
  });
