import { useSuspenseQuery } from '@tanstack/react-query';
import { keyStore } from '@/queries/keyStore.ts';
import { getPlantGuideDetail } from '@/apis/plantGuide/getPlantGuideDetail.ts';

export const useGetPlantGuideDetail = (plantId?: string) => {
  if (!plantId) throw Error('유효하지 않은 접근입니다.');

  return useSuspenseQuery({
    queryKey: keyStore.plantGuide.detail(+plantId).queryKey,
    queryFn: () => getPlantGuideDetail(+plantId),
  });
};
