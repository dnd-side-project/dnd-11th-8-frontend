import { useMutation } from '@tanstack/react-query';
import { keyStore } from '@/queries/keyStore.ts';
import { uploadMyPlantImage } from '@/apis/myPlant/uploadMyPlantImage.ts';

export const useUploadMyPlantImage = (plantId: number | undefined) => {
  if (!plantId) {
    throw Error('유효하지 않은 접근 입니다.');
  }

  return useMutation({
    mutationKey: keyStore.myPlant.uploadMyPlantImage.queryKey,
    mutationFn: (imageUrl: string) => uploadMyPlantImage(imageUrl, plantId),
  });
};
