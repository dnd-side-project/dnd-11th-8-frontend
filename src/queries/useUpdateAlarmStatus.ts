import { useMutation, useQueryClient } from '@tanstack/react-query';
import { keyStore } from '@/queries/keyStore.ts';
import { updateAlarmStatus } from '@/apis/user/updateAlarmStatus.ts';
import { GetMyPageDataResponse } from '@/apis/user/getMyPageData.ts';

export const useUpdateAlarmStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: keyStore.user.updateAlarmStatus.queryKey,
    mutationFn: updateAlarmStatus,
    onMutate: async (newAlarmStatus) => {
      await queryClient.cancelQueries({ queryKey: keyStore.user.getMyPageData.queryKey });
      const previousData = queryClient.getQueryData(keyStore.user.getMyPageData.queryKey);

      queryClient.setQueryData<GetMyPageDataResponse>(
        keyStore.user.getMyPageData.queryKey,
        (oldData) => {
          if (!oldData) return;

          return {
            ...oldData,
            alarmStatus: newAlarmStatus,
          };
        },
      );

      return { previousData };
    },

    onError(_error, _variables, context) {
      queryClient.setQueryData(keyStore.user.getMyPageData.queryKey, context?.previousData);
    },
    onSettled: () => {
      void queryClient.invalidateQueries({ queryKey: keyStore.user.getMyPageData.queryKey });
    },
  });
};
