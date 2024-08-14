import { useSuspenseQuery } from '@tanstack/react-query';
import { keyStore } from '@/queries/keyStore.ts';
import { getAllLocation } from '@/apis/location/getAllLocation.ts';

export const useGetAllLocation = () =>
  useSuspenseQuery({
    queryKey: keyStore.location.getAllLocation.queryKey,
    queryFn: getAllLocation,
  });
