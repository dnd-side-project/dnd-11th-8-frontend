import { privateAxios } from '@/libs/baseAxios.ts';

export const deleteLocation = async (locationId: number) =>
  privateAxios.delete(`/location/${locationId}`);
