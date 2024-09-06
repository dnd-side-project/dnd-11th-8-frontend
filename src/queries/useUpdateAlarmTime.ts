import { useMutation, useQueryClient } from '@tanstack/react-query';
import { keyStore } from '@/queries/keyStore.ts';
import { updateAlarmTime } from '@/apis/user/updateAlarmTime.ts';
import { GetMyPageDataResponse } from '@/apis/user/getMyPageData.ts';

export const useUpdateAlarmTime = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: keyStore.user.updateAlarmTime.queryKey,
    mutationFn: updateAlarmTime,

    onMutate: async (alarmTime: number) => {
      await queryClient.cancelQueries({ queryKey: keyStore.user.getMyPageData.queryKey });

      const previousData = queryClient.getQueryData(keyStore.user.getMyPageData.queryKey);

      queryClient.setQueryData<GetMyPageDataResponse>(
        keyStore.user.getMyPageData.queryKey,
        (old) => {
          if (!old) return;

          return {
            ...old,
            alarmTime,
          };
        },
      );

      return { previousData };
    },

    onError: (_err, _variables, context) => {
      if (!context) return;
      queryClient.setQueryData(keyStore.user.getMyPageData.queryKey, context.previousData);
    },

    onSettled: () => {
      void queryClient.invalidateQueries({ queryKey: keyStore.user.getMyPageData.queryKey });
    },
  });
};
