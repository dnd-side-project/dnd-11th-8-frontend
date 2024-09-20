import { useMutation, useQueryClient } from '@tanstack/react-query';
import { keyStore } from '@/queries/keyStore.ts';
import { updateMyPlantFeed } from '@/apis/myPlant/updateMyPlantFeed.ts';
import { MyPlantDetailType } from '@/mocks/mockDatas/myPlantDetail.ts';
import useToast from '@/hooks/useToast.tsx';

export const useUpdateMyPlantFeed = () => {
  const queryClient = useQueryClient();
  const { openToast } = useToast();

  return useMutation({
    mutationKey: keyStore.myPlant.updateMyPlantFeed.queryKey,
    mutationFn: updateMyPlantFeed,
    onMutate: async (params) => {
      await queryClient.cancelQueries({
        queryKey: keyStore.myPlant.getDetail(params.plantId).queryKey,
      });

      const previousData = queryClient.getQueryData(
        keyStore.myPlant.getDetail(params.plantId).queryKey,
      );

      queryClient.setQueryData<MyPlantDetailType>(
        keyStore.myPlant.getDetail(params.plantId).queryKey,
        (oldData) => {
          if (!oldData) return;

          return {
            ...oldData,
            images: oldData.images.map((image) => {
              if (image.imageId === params.imageId) {
                return {
                  ...image,
                  favorite: params.favorite,
                };
              }
              return image;
            }),
          };
        },
      );

      return { previousData };
    },

    onError: (_error, variables, context) => {
      queryClient.setQueryData(
        keyStore.myPlant.getDetail(variables.plantId).queryKey,
        context?.previousData,
      );
      openToast({
        message: '즐겨찾기 설정에 실패했습니다.',
      });
    },

    onSettled: (_data, _error, variables) => {
      void queryClient.invalidateQueries({
        queryKey: keyStore.myPlant.getDetail(variables.plantId).queryKey,
      });
    },
  });
};
