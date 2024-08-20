import { useSuspenseQuery } from '@tanstack/react-query';
import { keyStore } from '@/queries/keyStore.ts';
import { getRegions } from '@/apis/user/getRegions';

export const useGetRegions = (query: string) =>
  useSuspenseQuery({
    queryKey: keyStore.user.regions(query).queryKey,
    queryFn: () => getRegions(query),
  });
