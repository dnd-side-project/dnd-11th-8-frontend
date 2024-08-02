import baseAxios from '@/libs/baseAxios.ts';

export interface SignInWithAppleParams {
  idToken: string;
  email: string;
  name: string;
}

export interface SignInWithAppleResponse {
  accessToken: string;
  refreshToken: string;
}

export const signInWithApple = async (data: SignInWithAppleParams) => {
  const response = await baseAxios.post<SignInWithAppleResponse>('/login/apple', data);

  return response.data;
};
