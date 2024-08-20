import { baseAxios } from '@/libs/baseAxios.ts';
import { regions } from '@/mocks/mockDatas/regions.ts';

export const getRegions = async (query: string) => {
  const response = await baseAxios<typeof regions>(`/region?name=${query}`);

  return response.data;
};
