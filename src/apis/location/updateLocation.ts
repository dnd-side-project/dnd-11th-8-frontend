import baseAxios from '@/libs/baseAxios.ts';

export interface UpdateLocationParams {
  locationId: number;
  name: string;
}

export interface UpdateLocationResponse {
  id: number;
  name: string;
}

export const updateLocation = async ({ locationId, name }: UpdateLocationParams) =>
  baseAxios.patch<UpdateLocationResponse>(`/location/${locationId}`, { name });
