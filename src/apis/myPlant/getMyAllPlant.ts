import { privateAxios } from '@/libs/baseAxios';
import Plant from '@/types/MyPlant';

export interface LocationQueryParams {
  sort?: 'CREATED' | 'WATERED' | string;
  direction?: 'DESC' | 'ASC' | string;
  location?: number;
}

export const getMyAllPlant = async (query?: LocationQueryParams) => {
  const response = await privateAxios.get<Plant[]>(
    `/plants?sort=${query?.sort}&direction=${query?.direction}&location=${query?.location}`,
  );

  return response.data;
};
