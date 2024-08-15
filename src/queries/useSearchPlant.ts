import { useSuspenseQuery } from '@tanstack/react-query';
import { keyStore } from '@/queries/keyStore.ts';
import { searchPlant } from '@/apis/plantGuide/searchPlant.ts';

export const useSearchPlant = (query: string) =>
  useSuspenseQuery({
    queryKey: keyStore.plantGuide.searchPlant(query).queryKey,
    queryFn: async () => await searchPlant(query),
  });
