import { privateAxios } from '@/libs/baseAxios.ts';

const deleteImage = (imageId: number) => privateAxios.delete(`myplants/image/${imageId}`);

export const deleteMyPlantFeed = (images: number[]) => {
  return Promise.all(images.map((imageId) => deleteImage(imageId)));
};
