import { privateAxios } from '@/libs/baseAxios.ts';
import { MyPlantDetailType } from '@/mocks/mockDatas/myPlantDetail.ts';

export const getMyPlantDetail = async (plantId: number) => {
  const response = await privateAxios<MyPlantDetailType>(`/myplants/${plantId}`);

  return response.data;
};
