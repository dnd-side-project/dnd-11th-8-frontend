import { privateAxios } from '@/libs/baseAxios.ts';
import GuideDetailsProps from '@/types/GuideDetailsProps.ts';

export const getPlantGuideDetail = async (plantId: number) => {
  const response = await privateAxios.get<GuideDetailsProps>(`/plants/${plantId}`);

  return response.data;
};
