import { useSuspenseQuery } from '@tanstack/react-query';
import { keyStore } from './keyStore';
import { getMyAllPlant, LocationQueryParams } from '@/apis/myPlant/getMyAllPlant';

export const useAllMyPlant = (query: LocationQueryParams) =>
  useSuspenseQuery({
    queryKey: keyStore.myPlant.getMyAllPlant(query).queryKey,
    queryFn: async () => await getMyAllPlant(query),
  });
