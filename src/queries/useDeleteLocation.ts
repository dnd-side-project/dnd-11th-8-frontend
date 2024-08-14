import { useMutation, useQueryClient } from '@tanstack/react-query';
import { keyStore } from '@/queries/keyStore.ts';
import { deleteLocation } from '@/apis/location/deleteLocation.ts';
import { PlantLocation } from '@/types/plantLocation';

export const useDeleteLocation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: keyStore.location.deleteLocation.queryKey,
    mutationFn: deleteLocation,
    onMutate: async (locationId) => {
      await queryClient.cancelQueries({
        queryKey: keyStore.location.getAllLocation.queryKey,
      });

      const previousLocations = queryClient.getQueryData(keyStore.location.getAllLocation.queryKey);

      queryClient.setQueryData<PlantLocation[]>(
        keyStore.location.getAllLocation.queryKey,
        (old) => {
          return old?.filter((location) => location.id !== locationId);
        },
      );

      return { previousLocations };
    },

    onError: (_err, _variables, context) => {
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
