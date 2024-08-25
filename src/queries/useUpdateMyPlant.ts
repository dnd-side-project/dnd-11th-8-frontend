import { useMutation } from '@tanstack/react-query';
import { updateMyPlant } from '@/apis/myPlant/updateMyPlant.ts';
import { keyStore } from '@/queries/keyStore.ts';

export const useUpdateMyPlant = () => {
  return useMutation({
    mutationFn: updateMyPlant,
    mutationKey: keyStore.myPlant.updateMyPlant.queryKey,
  });
};
