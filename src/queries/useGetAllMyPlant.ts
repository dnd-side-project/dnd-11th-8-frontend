import { useQuery } from '@tanstack/react-query';
import { keyStore } from './keyStore';
import { getMyAllPlant, LocationQueryParams } from '@/apis/myPlant/getMyAllPlant';

export interface GetAllMyPlantParams {
  locationId: number;
  sort: LocationQueryParams['sort'];
}

export const useGetAllMyPlant = ({ locationId, sort }: GetAllMyPlantParams) =>
  useQuery({
    queryKey: keyStore.myPlant.getMyAllPlant.queryKey,
    queryFn: getMyAllPlant,
    select: (data) => {
      let filteredData = [...data];

      if (locationId !== -1) {
        filteredData = filteredData.filter((plant) => plant.locationId === locationId);
      }

      switch (sort) {
        case 'created_asc':
          filteredData.sort(
            (a, b) =>
              new Date(a.registeredDateTime).getTime() - new Date(b.registeredDateTime).getTime(),
          );
          break;
        case 'created_desc':
          filteredData.sort(
            (a, b) =>
              new Date(b.registeredDateTime).getTime() - new Date(a.registeredDateTime).getTime(),
          );
          break;
        case 'no_location':
          filteredData = filteredData.filter((plant) => !plant.haveLocation);
          break;
      }

      return filteredData;
    },
  });
