import { useSuspenseQuery } from '@tanstack/react-query';
import { keyStore } from '@/queries/keyStore.ts';
import { searchPlant } from '@/apis/plantGuide/searchPlant.ts';

export const useSearchPlant = () =>
  useSuspenseQuery({
    queryKey: keyStore.plantGuide.searchPlant.queryKey,
    queryFn: searchPlant,
  });
