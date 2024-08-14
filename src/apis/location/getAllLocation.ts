import baseAxios from '@/libs/baseAxios.ts';
import { PlantLocation } from '@/types/plantLocation';

export const getAllLocation = async () => {
  const response = await baseAxios.get<PlantLocation[]>('/location');

  return response.data;
};
