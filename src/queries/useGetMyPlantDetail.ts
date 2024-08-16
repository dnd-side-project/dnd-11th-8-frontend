import { useSuspenseQuery } from '@tanstack/react-query';
import { keyStore } from '@/queries/keyStore.ts';
import { getMyPlantDetail } from '@/apis/myPlant/getMyPlantDetail.ts';

export const useGetMyPlantDetail = (plantId: number | undefined) => {
  if (!plantId) {
    throw Error('잘못된 식물 입니다.');
  }

  return useSuspenseQuery({
    queryKey: keyStore.myPlant.getDetail(plantId).queryKey,
    queryFn: () => getMyPlantDetail(plantId),
  });
};
