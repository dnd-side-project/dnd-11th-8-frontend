import { useMutation, useQueryClient } from '@tanstack/react-query';
import { keyStore } from '@/queries/keyStore.ts';
import { deleteMyPlant } from '@/apis/myPlant/deleteMyPlant.ts';
import Plant from '@/types/MyPlant.ts';

export const useDeleteMyPlant = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: keyStore.myPlant.deleteMyPlant.queryKey,
    mutationFn: deleteMyPlant,
    onMutate: async (plantId: number) => {
      await queryClient.cancelQueries({
        queryKey: keyStore.myPlant.getMyAllPlant.queryKey,
      });

      const previousData = queryClient.getQueryData(keyStore.myPlant.getMyAllPlant.queryKey);

      queryClient.setQueryData<Plant[]>(keyStore.myPlant.getMyAllPlant.queryKey, (data) => {
        return data?.filter((plant) => plant.myPlantId !== plantId);
      });

      return { previousData };
    },

    onError: (_error, _variables, context) => {
      queryClient.setQueryData(keyStore.myPlant.getMyAllPlant.queryKey, context?.previousData);
    },

    onSettled: () => {
      void queryClient.invalidateQueries({ queryKey: keyStore.myPlant.getMyAllPlant.queryKey });
    },
  });
};
