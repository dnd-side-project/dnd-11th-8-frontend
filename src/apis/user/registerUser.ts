import { baseAxios } from '@/libs/baseAxios.ts';
import { NumericRange } from '@/types/NewmericRange.ts';

export interface UserRegisterParams {
  nickname: string;
  regionId: number;
  alarmTime: NumericRange<1, 19>;
  registerToken: string;
}

export interface UserRegisterResponse {
  accessToken: string;
  refreshToken: string;
}

export const registerUser = async ({ registerToken, ...data }: UserRegisterParams) =>
  baseAxios.post<UserRegisterResponse>('/users/register', data, {
    headers: {
      RegisterToken: registerToken,
    },
  });
