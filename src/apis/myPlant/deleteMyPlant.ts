import { privateAxios } from '@/libs/baseAxios.ts';

export const deleteMyPlant = (plantId: number) => privateAxios.delete(`/myplants/${plantId}`);
