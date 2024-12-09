import { useMutation, useQueryClient } from '@tanstack/react-query';
import { keyStore } from '@/queries/keyStore.ts';
import { uploadMyPlantImage } from '@/apis/myPlant/uploadMyPlantImage.ts';
import useToast from '@/hooks/useToast.tsx';

export const useUploadMyPlantImage = (plantId: number | undefined) => {
  const { openToast } = useToast();
  const queryClient = useQueryClient();

  if (!plantId) {
    throw Error('유효하지 않은 접근 입니다.');
  }

  return useMutation({
    mutationKey: keyStore.myPlant.uploadMyPlantImage.queryKey,
    mutationFn: (imageUrl: string) => uploadMyPlantImage(imageUrl, plantId),
    onError: () => {
      openToast({
        message: '이미지 업로드에 실패했습니다.',
      });
    },
    onSuccess: async () => {
      openToast({
        message: '이미지가 업로드되었습니다.',
        duration: 3000,
      });
      await queryClient.invalidateQueries({
        queryKey: keyStore.myPlant.getDetail(plantId).queryKey,
      });
    },
  });
};
