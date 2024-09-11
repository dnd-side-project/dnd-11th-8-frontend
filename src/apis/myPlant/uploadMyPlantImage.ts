import { privateAxios } from '@/libs/baseAxios.ts';

export const uploadMyPlantImage = async (imageUrl: string, plantId: number) =>
  privateAxios.post(`/myplants/${plantId}/image`, { imageUrl });
