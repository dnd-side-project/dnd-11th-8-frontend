import { useQuery } from '@tanstack/react-query';
import { keyStore } from './keyStore';
import { getMyAllPlant, LocationQueryParams } from '@/apis/myPlant/getMyAllPlant';

export const useGetAllMyPlant = (query?: LocationQueryParams) =>
  useQuery({
    queryKey: keyStore.myPlant.getMyAllPlant(query).queryKey,
    queryFn: () => getMyAllPlant(query),
  });
