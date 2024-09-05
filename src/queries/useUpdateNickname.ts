import { useMutation, useQueryClient } from '@tanstack/react-query';
import { keyStore } from '@/queries/keyStore.ts';
import { updateNickname } from '@/apis/user/updateNickname.ts';
import { GetMyPageDataResponse } from '@/apis/user/getMyPageData.ts';
import useToast from '@/hooks/useToast.tsx';
import useInternalRouter from '@/hooks/useInternalRouter.ts';

export const useUpdateNickname = () => {
  const queryClient = useQueryClient();
  const router = useInternalRouter();
  const { openToast } = useToast();

  return useMutation({
    mutationKey: keyStore.user.updateNickname.queryKey,
    mutationFn: updateNickname,
    onMutate: async (newNickname: string) => {
      await queryClient.cancelQueries({ queryKey: keyStore.user.getMyPageData.queryKey });
      const previousProfile = queryClient.getQueryData<GetMyPageDataResponse>(
        keyStore.user.getMyPageData.queryKey,
      );

      queryClient.setQueryData<GetMyPageDataResponse>(
        keyStore.user.getMyPageData.queryKey,
        (oldData) => {
          if (!oldData) return;

          return {
            ...oldData,
            nickname: newNickname,
          };
        },
      );
      router.goBack();

      return { previousProfile };
    },

    onError: (_error, _newNickname, context) => {
      queryClient.setQueryData<GetMyPageDataResponse>(
        keyStore.user.getMyPageData.queryKey,
        context?.previousProfile,
      );
      openToast({ message: '닉네임 수정에 실패했습니다.' });
    },
  });
};
