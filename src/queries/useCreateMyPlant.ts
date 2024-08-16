import { useMutation } from '@tanstack/react-query';
import { keyStore } from '@/queries/keyStore.ts';
import { createMyPlant } from '@/apis/myPlant/createMyPlant.ts';

export const useCreateMyPlant = () =>
  useMutation({
    mutationKey: keyStore.myPlant.createMyPlant.queryKey,
    mutationFn: createMyPlant,
  });
