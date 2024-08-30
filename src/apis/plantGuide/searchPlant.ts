import { privateAxios } from '@/libs/baseAxios.ts';

export type SearchPlantResponse = {
  plantId: number;
  name: string;
}[];

export const searchPlant = async (query: string) => {
  if (query === '') {
    return [];
  }
  const response = await privateAxios.get<SearchPlantResponse>(`/plants?plantName=${query}`);
  return response.data;
};
