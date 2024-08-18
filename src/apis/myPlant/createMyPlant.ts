import { privateAxios } from '@/libs/baseAxios.ts';

export interface CreateMyPlantProps {
  plantId: string | null;
  nickname: string;
  locationId: number | undefined;
  startDate: `${number}-${number}-${number}`;
  lastWateredDate: `${number}-${number}-${number}`;
  waterAlarm: boolean;
  waterPeriod: number | null;
  fertilizerAlarm: boolean;
  fertilizerPeriod: number | null;
  healthCheckAlarm: boolean;
}

export const createMyPlant = async (form: CreateMyPlantProps) =>
  privateAxios.post('/myplants', form);
