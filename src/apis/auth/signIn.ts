import { baseAxios } from '@/libs/baseAxios.ts';

export interface SignInParams {
  idToken: string;
  provider: 'apple' | 'kakao';
}

export interface SignInSuccessResponse {
  status: 'success' | 'pending';
  accessToken: string;
  refreshToken: string;
}

export interface SignInPendingResponse {
  status: 'pending';
  registerToken: string;
}

export type SignInResponse = SignInSuccessResponse | SignInPendingResponse;

export const signIn = async ({ idToken, provider }: SignInParams) =>
  baseAxios.post<SignInResponse>(`/login/${provider}`, { idToken });
