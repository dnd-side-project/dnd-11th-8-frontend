import { privateAxios } from '@/libs/baseAxios.ts';

export const deleteMyPlantFeed = (imageIds: number[]) =>
  privateAxios.delete(`myplants/image`, {
    data: { imageIds },
  });
