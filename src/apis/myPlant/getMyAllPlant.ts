import { privateAxios } from '@/libs/baseAxios';
import Plant from '@/types/MyPlant';

export interface LocationQueryParams {
  sort?: 'created_desc' | 'created_asc' | 'no_location';
  locationId?: number;
}

export const getMyAllPlant = async () => {
  // const searchParams = new URLSearchParams();

  // if (query?.sort !== undefined) searchParams.set('sort', query.sort);

  // if (query?.locationId !== undefined) searchParams.set('locationId', query.locationId.toString());

  // let url = '/myplants';

  // if (searchParams.toString() !== '') {
  //   url = `/myplants?${searchParams.toString()}`;
  // }

  const response = await privateAxios.get<Plant[]>('/myplants');

  return response.data;
};
