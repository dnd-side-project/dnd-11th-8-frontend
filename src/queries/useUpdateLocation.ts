import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateLocation } from '@/apis/location/updateLocation.ts';
import { keyStore } from '@/queries/keyStore.ts';
import { PlantLocation } from '@/types/plantLocation';

export const useUpdateLocation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateLocation,
    mutationKey: keyStore.location.updateLocation.queryKey,
    onMutate: async ({ locationId, name }) => {
      // TODO: 낙관적 업데이트 로직 구현
      await queryClient.cancelQueries({
        queryKey: keyStore.location.getAllLocation.queryKey,
      });

      const previousLocations = queryClient.getQueryData(keyStore.location.getAllLocation.queryKey);

      queryClient.setQueryData<PlantLocation[]>(
        keyStore.location.getAllLocation.queryKey,
        (old) => {
          return old?.map((location) => {
            if (location.id === locationId) {
              return {
                ...location,
                name,
              };
            }
            return location;
          });
        },
      );

      return { previousLocations };
    },

    onError: (_error, _variables, context) => {
      queryClient.setQueryData(
        keyStore.location.getAllLocation.queryKey,
        context?.previousLocations,
      );
    },

    onSettled: () => {
      void queryClient.invalidateQueries({
        queryKey: keyStore.location.getAllLocation.queryKey,
      });
    },
  });
};
