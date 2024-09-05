import { privateAxios } from '@/libs/baseAxios.ts';

export const updateNickname = async (nickname: string) =>
  privateAxios.patch('users/my/nickname', { nickname });
