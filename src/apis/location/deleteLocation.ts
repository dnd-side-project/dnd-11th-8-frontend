import baseAxios from '@/libs/baseAxios.ts';

export const deleteLocation = async (locationId: number) =>
  baseAxios.delete(`/location/${locationId}`);
