import { useMutation, useQueryClient } from '@tanstack/react-query';
import { keyStore } from '@/queries/keyStore.ts';
import {
  updateMyPlantStatus,
  UpdateMyPlantType,
  UpdateMyPlantTypeKeys,
} from '@/apis/myPlant/updateMyPlantStatus.ts';
import { GetHomeScreenDataResponse } from '@/apis/home/getHomeScreenData.ts';

export const useUpdateMyPlantStatus = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: keyStore.myPlant.updateMyPlantStatus.queryKey,
    mutationFn: (mode: (typeof UpdateMyPlantType)[UpdateMyPlantTypeKeys]) =>
      updateMyPlantStatus(id, mode),

    onMutate: async (mode) => {
      await queryClient.cancelQueries({
        queryKey: keyStore.home.getHomeData.queryKey,
      });

      const previousData = queryClient.getQueryData(keyStore.home.getHomeData.queryKey);

      queryClient.setQueryData<GetHomeScreenDataResponse>(
        keyStore.home.getHomeData.queryKey,
        (oldData) => {
          if (!oldData) {
            return;
          }
          return {
            ...oldData,
            myPlantInfo: oldData.myPlantInfo.map((plant) => {
              if (plant.myPlantId === id) {
                return {
                  ...plant,
                  dateSinceLastWater:
                    mode === UpdateMyPlantType.WATER ? 0 : plant.dateSinceLastWater,
                  dateSinceLasthealthCheck:
                    mode === UpdateMyPlantType.HEALTH_CHECK ? 0 : plant.dateSinceLasthealthCheck,
                  dateSinceLastFertilizer:
                    mode === UpdateMyPlantType.FERTILIZER ? 0 : plant.dateSinceLastFertilizer,
                };
              }
              return plant;
            }),
          };
        },
      );

      return { previousData };
    },
    onError: (_err, _variables, context) => {
      queryClient.setQueryData(keyStore.home.getHomeData.queryKey, context?.previousData);
    },
    onSettled: () => {
      void queryClient.invalidateQueries({ queryKey: keyStore.home.getHomeData.queryKey });
    },
  });
};
