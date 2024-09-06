import { useQuery } from '@tanstack/react-query';
import { keyStore } from './keyStore';
import { getMyAllPlant } from '@/apis/myPlant/getMyAllPlant';

export const useGetAllMyPlant = () =>
  useQuery({
    queryKey: keyStore.myPlant.getMyAllPlant.queryKey,
    queryFn: getMyAllPlant,
  });
