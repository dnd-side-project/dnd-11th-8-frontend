import { baseAxios } from '@/libs/baseAxios.ts';
import axios from 'axios';

export interface SignInParams {
  idToken: string;
  provider: 'apple' | 'kakao';
}

export interface SignInSuccessResponse {
  status: 'success';
  accessToken: string;
  refreshToken: string;
}

export interface SignInPendingResponse {
  status: 'pending';
  registerToken: string;
}

export interface KakaoSignInResponse {
  access_token: string;
  token_type: string;
  id_token: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
}

export type SignInResponse = SignInSuccessResponse | SignInPendingResponse;

export const signIn = async ({ idToken, provider }: SignInParams) => {
  if (provider === 'kakao') {
    const response = await axios.post<KakaoSignInResponse>('https://kauth.kakao.com/oauth/token', {
      grant_type: 'authorization_code',
      client_id: import.meta.env.VITE_KAKAO_REST_API_KEY,
      redirect_uri: import.meta.env.VITE_REDIRECT_URI,
      code: idToken,
    });
    idToken = response.data.id_token;
  }

  return baseAxios.post<SignInResponse>(`/login/${provider}`, { idToken });
};
