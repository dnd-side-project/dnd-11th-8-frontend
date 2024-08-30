import { useQuery } from '@tanstack/react-query';
import { keyStore } from '@/queries/keyStore.ts';
import { searchPlant } from '@/apis/plantGuide/searchPlant.ts';

export const useSearchPlant = (query: string) =>
  useQuery({
    queryKey: keyStore.plantGuide.searchPlant(query).queryKey,
    queryFn: async () => await searchPlant(query),
    retry: false,
    refetchInterval: false,
  });
