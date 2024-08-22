import { privateAxios } from '@/libs/baseAxios.ts';

export interface CreateMyPlantProps {
  plantId?: string;
  nickname?: string;
  scientificName: string;
  locationId?: number;
  startDate?: `${number}-${number}-${number}`;
  // TODO: 마지막으로 물, 비료 준 날 값 러프하게 변경됨
  lastWateredDate?: number;
  lastFertilizerDate?: number;
  waterAlarm: boolean;
  waterPeriod?: number;
  fertilizerAlarm: boolean;
  fertilizerPeriod?: number;
  healthCheckAlarm: boolean;
}

export const createMyPlant = async (form: CreateMyPlantProps) =>
  privateAxios.post('/myplants', form);
