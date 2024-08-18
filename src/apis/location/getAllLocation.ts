import { privateAxios } from '@/libs/baseAxios.ts';
import { PlantLocation } from '@/types/plantLocation';

export const getAllLocation = async () => {
  const response = await privateAxios.get<PlantLocation[]>('/location');

  return response.data;
};
