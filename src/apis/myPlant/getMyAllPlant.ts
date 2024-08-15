import baseAxios from '@/libs/baseAxios';
import Plant from '@/types/myPlant';

export interface LocationQueryParams {
  sort?: 'CREATED' | 'WATERED';
  direction?: 'DESC' | 'ASC';
  location?: number;
}

export const getMyAllPlant = async (query?: LocationQueryParams) => {
  const response = await baseAxios.get<Plant[]>(
    `/plant?sort=${query?.sort}&direction=${query?.direction}&location=${query?.location}`,
  );

  return response.data;
};
