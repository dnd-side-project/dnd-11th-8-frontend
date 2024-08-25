import { privateAxios } from '@/libs/baseAxios.ts';

export interface UpdateMyPlantRequest {
  nickname?: string;
  locationId?: number;
  startDate?: string;
  lastWateredDate?: string;
  lastFertilizerDate?: string;
  myPlantId: number;
}

export const updateMyPlant = async ({ myPlantId, ...data }: UpdateMyPlantRequest) => {
  return privateAxios.patch(`/myplants/${myPlantId}`, data);
};
