import { useSuspenseQuery } from '@tanstack/react-query';
import { keyStore } from '@/queries/keyStore.ts';
import { getHomeScreenData } from '@/apis/home/getHomeScreenData.ts';

export const useGetHomeData = () =>
  useSuspenseQuery({
    queryKey: keyStore.home.getHomeData.queryKey,
    queryFn: getHomeScreenData,
  });
