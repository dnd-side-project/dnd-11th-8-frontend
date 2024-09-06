import { privateAxios } from '@/libs/baseAxios';
import Plant from '@/types/MyPlant';

export interface LocationQueryParams {
  sort?: 'created_desc' | 'created_asc' | 'no_location';
  locationId?: number;
}

export const getMyAllPlant = async () => {
  const response = await privateAxios.get<Plant[]>('/myplants');

  return response.data;
};
