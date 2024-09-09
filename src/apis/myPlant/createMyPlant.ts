import { privateAxios } from '@/libs/baseAxios.ts';
import { YyMmDdDate } from '@/types/date.ts';
import { NumericRange } from '@/types/NewmericRange.ts';

export type SimpleDatePickerValue = NumericRange<1, 6>;

export interface CreateMyPlantRequestBody {
  plantId: string | null;
  nickname: string | null;
  scientificName: string;
  locationId: number | null;
  startDate: YyMmDdDate | null;
  lastWateredDate: SimpleDatePickerValue;
  lastFertilizerDate: SimpleDatePickerValue;
  waterAlarm: boolean;
  waterPeriod: number | null;
  fertilizerAlarm: boolean;
  fertilizerPeriod: number | null;
  healthCheckAlarm: boolean;
}

export const createMyPlant = async (form: CreateMyPlantRequestBody) =>
  privateAxios.post('/myplants', form);
