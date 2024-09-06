import { privateAxios } from '@/libs/baseAxios.ts';

export interface GetMyPageDataResponse {
  nickname: string;
  myPlantCount: number;
  alarmCount: number;
  alarmStatus: boolean;
  alarmTime: number;
}

export const getMyPageData = async () => {
  const response = await privateAxios.get<GetMyPageDataResponse>('/users/my');

  return response.data;
};
