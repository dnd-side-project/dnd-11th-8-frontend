import { useMutation } from '@tanstack/react-query';
import { keyStore } from '@/queries/keyStore.ts';
import { deleteMyPlantFeed } from '@/apis/myPlant/deleteMyPlantFeed.ts';

export const useDeleteMyPlantFeed = () => {
  return useMutation({
    mutationKey: keyStore.myPlant.deleteMyPlantFeed.queryKey,
    mutationFn: deleteMyPlantFeed,
  });
};
