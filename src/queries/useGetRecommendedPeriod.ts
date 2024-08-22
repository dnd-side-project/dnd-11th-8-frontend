import { useQuery } from '@tanstack/react-query';
import { keyStore } from '@/queries/keyStore.ts';
import { getRecommendedPeriod } from '@/apis/plantGuide/getRecommendedPeriod.ts';

export const useGetRecommendedPeriod = (plantId: number | null) => {
  return useQuery({
    queryKey: keyStore.myPlant.getRecommendedPeriod(plantId).queryKey,
    queryFn: () => getRecommendedPeriod(plantId),
  });
};
