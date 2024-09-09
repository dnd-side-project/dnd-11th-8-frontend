import { privateAxios } from '@/libs/baseAxios.ts';
import Plant from '@/types/MyPlant.ts';

export interface GetHomeScreenDataResponse {
  greetingMessage: string;
  myPlantInfo: Pick<
    Plant,
    | 'myPlantId'
    | 'nickname'
    | 'scientificName'
    | 'dateSinceLastFertilizer'
    | 'dateSinceLastWater'
    | 'dateSinceLastHealthCheck'
  >[];
}

export const getHomeScreenData = async () => {
  const response = await privateAxios.get<GetHomeScreenDataResponse>('/home');

  return response.data;
};
