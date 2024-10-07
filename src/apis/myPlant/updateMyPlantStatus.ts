import { privateAxios } from '@/libs/baseAxios.ts';

export const UpdateMyPlantType = {
  WATER: 'WATER',
  HEALTH_CHECK: 'HEALTH_CHECK',
  FERTILIZER: 'FERTILIZER',
  STATUS: 'STATUS',
} as const;

export type UpdateMyPlantTypeKeys = keyof typeof UpdateMyPlantType;

export const water = async (plantId: number) => privateAxios.post(`/myplants/${plantId}/water`);

export const healthCheck = async (plantId: number) =>
  privateAxios.post(`/myplants/${plantId}/healthcheck`);

export const fertilizer = async (plantId: number) =>
  privateAxios.post(`/myplants/${plantId}/fertilizer`);

export const updateMyPlantStatus = async (
  plantId: number,
  status: (typeof UpdateMyPlantType)[UpdateMyPlantTypeKeys],
) => {
  switch (status) {
    case UpdateMyPlantType.WATER:
      return water(plantId);
    case UpdateMyPlantType.HEALTH_CHECK:
      return healthCheck(plantId);
    case UpdateMyPlantType.FERTILIZER:
      return fertilizer(plantId);
    default:
      throw new Error('Invalid status');
  }
};
