import baseAxios from '@/libs/baseAxios.ts';

export type SearchPlantResponse = {
  plantId: number;
  name: string;
}[];

export const searchPlant = async (query: string) => {
  const response = await baseAxios.get<SearchPlantResponse>(`/plants?search=${query}`);
  return response.data;
};
