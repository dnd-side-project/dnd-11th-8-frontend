import { baseAxios } from '@/libs/baseAxios.ts';

export interface RefreshAccessTokenResponse {
  accessToken: string;
  expiresIn: number;
  refreshToken: string;
  refreshTokenExpiresIn: number;
}

export const refreshAccessToken = async (refreshToken: string) =>
  baseAxios.post<RefreshAccessTokenResponse>('/token', { refreshToken });
