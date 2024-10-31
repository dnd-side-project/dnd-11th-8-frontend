import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateMyPlantAlarm, UpdateMyPlantAlarmParams } from '@/apis/myPlant/updateMyPlantAlarm.ts';
import { keyStore } from '@/queries/keyStore.ts';
import { MyPlantDetailType } from '@/mocks/mockDatas/myPlantDetail.ts';

export const useUpdateMyPlantAlarm = (plantId: number | undefined) => {
  const queryClient = useQueryClient();

  if (!plantId) {
    throw Error('잘못된 접근입니다.');
  }

  return useMutation({
    mutationFn: (params: UpdateMyPlantAlarmParams['body']) =>
      updateMyPlantAlarm({
        body: params,
        plantId,
      }),
    mutationKey: keyStore.myPlant.updateMyPlantAlarm.queryKey,
    onMutate: async (newAlarmState) => {
      await queryClient.cancelQueries({ queryKey: keyStore.myPlant.getDetail(plantId).queryKey });
      const previousData = queryClient.getQueryData(keyStore.myPlant.getDetail(plantId).queryKey);

      queryClient.setQueryData<MyPlantDetailType>(
        keyStore.myPlant.getDetail(plantId).queryKey,
        (data) => {
          if (!data) return;
          return {
            ...data,
            ...newAlarmState,
          };
        },
      );

      return { previousData };
    },

    onError: (_err, _variables, context) => {
      if (!context) return;
      queryClient.setQueryData(keyStore.myPlant.getDetail(plantId).queryKey, context.previousData);
    },

    onSettled: () => {
      void queryClient.invalidateQueries({
        queryKey: keyStore.myPlant.getDetail(plantId).queryKey,
      });
    },
  });
};
