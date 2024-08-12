import baseAxios from '@/libs/baseAxios.ts';

export type SearchPlantResponse = {
  plantId: number;
  name: string;
}[];

export const searchPlant = async () => {
  const response = await baseAxios.get<SearchPlantResponse>('/plants');
  return response.data;
};
