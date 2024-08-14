import baseAxios from '@/libs/baseAxios.ts';

// TODO: 추후 에러 처리 해야함

export interface AddNewLocationResponse {
  id: number;
  name: string;
}

export const addNewLocation = async (name: string) =>
  baseAxios.post<AddNewLocationResponse>('/location', { name });
