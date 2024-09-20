import { privateAxios } from '@/libs/baseAxios.ts';

export interface UpdateMyPlantFeedParams {
  plantId: number;
  favorite: boolean;
  imageId: number;
}

export const updateMyPlantFeed = (params: UpdateMyPlantFeedParams) => {
  return privateAxios.patch(`/myplant/image/${params.imageId}`);
};
