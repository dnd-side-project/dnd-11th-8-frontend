import { privateAxios } from '@/libs/baseAxios.ts';

export type SearchPlantResponse = {
  plantId: number;
  name: string;
  imageUrl: string;
}[];

export const searchPlant = async (query: string) => {
  if (query === '') {
    return [];
  }
  const response = await privateAxios.post<SearchPlantResponse>(`/plants?plantName=${query}`);
  return response.data;
};
