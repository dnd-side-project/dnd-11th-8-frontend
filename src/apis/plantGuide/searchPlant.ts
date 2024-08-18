import { privateAxios } from '@/libs/baseAxios.ts';

export type SearchPlantResponse = {
  plantId: number;
  name: string;
}[];

export const searchPlant = async (query: string) => {
  const response = await privateAxios.get<SearchPlantResponse>(`/plants?search=${query}`);
  return response.data;
};
