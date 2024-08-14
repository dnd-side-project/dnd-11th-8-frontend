import { useMutation, useQueryClient } from '@tanstack/react-query';
import { keyStore } from '@/queries/keyStore.ts';
import { addNewLocation } from '@/apis/location/addNewLocation.ts';
import { PlantLocation } from '@/types/plantLocation';

export const useAddNewLocation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: keyStore.location.addNewLocation.queryKey,
    mutationFn: addNewLocation,
    onMutate: async (name) => {
      // Optimistic 업데이트 로직 입니다! 새로운 위치를 추가할 때 응답 결과를 기다리지 않고 바로 추가되는것 처럼 보이도록 했습니다!
      await queryClient.cancelQueries({ queryKey: keyStore.location.getAllLocation.queryKey });

      const previousLocations = queryClient.getQueriesData({
        queryKey: keyStore.location.getAllLocation.queryKey,
      });

      // @ts-expect-error -- oldData 가 any 로 추론되어 발생하는 에러를 막기 위한 주석 입니다.
      queryClient.setQueryData(keyStore.location.getAllLocation.queryKey, (oldData) => {
        return [...(oldData as PlantLocation[]), { id: -1, name }];
      });

      return { previousLocations };
    },

    onError: (_error, _newLocation, context) => {
      queryClient.setQueryData(
        keyStore.location.getAllLocation.queryKey,
        context?.previousLocations,
      );
    },

    onSettled: () => {
      void queryClient.invalidateQueries({ queryKey: keyStore.location.getAllLocation.queryKey });
    },
  });
};
